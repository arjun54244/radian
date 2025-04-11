<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BookResource\Pages;
use App\Filament\Resources\BookResource\RelationManagers;
use App\Models\Book;
use Filament\Forms;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{Select, Textarea, FileUpload, RichEditor, Section, TagsInput};
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Str;

class BookResource extends Resource
{
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Products';

    protected static ?string $navigationGroup = 'Shop';
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Book Details')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('Enter book title')->live(onBlur: true)
                            ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                if ($operation !== 'create') {
                                    return;
                                }

                                $set('slug', Str::slug($state));
                            }),

                        TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->unique(Book::class, 'slug', ignoreRecord: true),

                        Select::make('author_id')
                            ->relationship('author', 'name')
                            ->searchable()
                            ->preload()
                            ->required(),

                        Select::make('category')
                            ->options([
                                'Fiction' => 'Fiction',
                                'Non-Fiction' => 'Non-Fiction',
                                'Science' => 'Science',
                                'Biography' => 'Biography',
                            ])
                            ->searchable()
                            ->required(),

                        TextInput::make('isbn_number')
                            ->label('ISBN')
                            ->maxLength(13)
                            ->placeholder('978-XXXXXXXXXX'),

                        TextInput::make('sku_number')
                            ->label('SKU Number')
                            ->unique()
                            ->required()
                            ->placeholder('Enter unique SKU'),
                    ]),

                Section::make('Stock & Pricing')
                    ->columns(3)
                    ->schema([
                        Select::make('stock_status')
                            ->options([
                                'in_stock' => 'In Stock',
                                'out_of_stock' => 'Out of Stock',
                            ])
                            ->default('in_stock')
                            ->required(),

                        TextInput::make('base_price')
                            ->label('Base Price (USD)')
                            ->numeric()
                            ->rules('regex:/^\d{1,6}(\.\d{0,2})?$/')
                            ->required(),

                        TextInput::make('discounted_price')
                            ->label('Discounted Price (USD)')
                            ->numeric()
                            ->rules('regex:/^\d{1,6}(\.\d{0,2})?$/')
                            ->helperText('Leave blank if no discount'),
                    ]),

                Section::make('Book Attributes')
                    ->columns(4)
                    ->schema([
                        Checkbox::make('bestseller')->label('Bestseller'),
                        Checkbox::make('latest_release')->label('Latest Release'),
                        Checkbox::make('most_purchased')->label('Most Purchased'),
                        Checkbox::make('on_sale')->label('On Sale'),
                    ]),

                Section::make('Exam Categories')
                    ->columns(3)
                    ->schema([
                        Checkbox::make('cuet_exams')->label('CUET Exams'),
                        Checkbox::make('railway_exams')->label('Railway Exams'),
                        Checkbox::make('defence')->label('Defence'),
                        Checkbox::make('ssc_exams')->label('SSC Exams'),
                        Checkbox::make('books_for_all_competitions')->label('Books for All Competitions'),
                        Checkbox::make('jnv_sainik_rms')->label('JNV Sainik RMS'),
                    ]),

                Section::make('Regions')
                    ->columns(3)
                    ->schema([
                        Checkbox::make('delhi')->label('Delhi'),
                        Checkbox::make('mp')->label('Madhya Pradesh'),
                        Checkbox::make('rajasthan')->label('Rajasthan'),
                        Checkbox::make('bihar')->label('Bihar'),
                        Checkbox::make('haryana')->label('Haryana'),
                        Checkbox::make('up')->label('Uttar Pradesh'),
                    ]),

                Section::make('Media & Description')
                    ->columns(2)
                    ->schema([
                        Textarea::make('short_description')
                            ->maxLength(500)
                            ->placeholder('Short description of the book'),

                        RichEditor::make('description')
                            ->placeholder('Full description...')
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Status')
                            ->schema([
                                Forms\Components\Toggle::make('Status')
                                    ->label('Visibility')
                                    ->helperText('Enable or disable product visibility')
                                    ->default(true),

                                Forms\Components\DatePicker::make('published_at')
                                    ->label('Availability')
                                    ->default(now())
                            ]),

                        Forms\Components\Section::make('Image')
                            ->schema([
                                Forms\Components\FileUpload::make('image')
                                    ->directory('books')
                                    ->preserveFilenames()
                                    ->image()
                                    ->imageEditor()
                                    ->maxFiles(5)
                                    ->maxSize(2048), // 2MB limit
                            ])->collapsible(),
                    ]),

                Section::make('SEO & Metadata')
                    ->columns(2)
                    ->schema([
                        TextInput::make('meta_title')
                            ->label('Meta Title')
                            ->maxLength(255)
                            ->required()
                            ->placeholder('Enter SEO-friendly title')
                            ->helperText('Appears in search results and browser tab'),

                        Textarea::make('meta_description')
                            ->label('Meta Description')
                            ->maxLength(500)
                            ->rows(3)
                            ->required()
                            ->placeholder('Enter a compelling meta description')
                            ->helperText('Should be between 150-160 characters for best SEO results.'),

                        TextInput::make('canonical_tag')
                            ->label('Canonical URL')
                            ->url()
                            ->placeholder('https://example.com/book-title')
                            ->helperText('Specify the preferred URL for this book.'),

                        TagsInput::make('tags')
                            ->label('Tags')
                            ->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('ID')->sortable(),
                TextColumn::make('title')->label('Title')->searchable(),
                TextColumn::make('author.name')->label('Author')->searchable(),
                TextColumn::make('base_price')->label('Price'),
                TextColumn::make('bestseller')->label('Bestseller'),
                TextColumn::make('latest_release')->label('Latest Release'),
                TextColumn::make('most_purchased')->label('Most Purchased'),
                TextColumn::make('on_sale')->label('On Sale'),
                TextColumn::make('cuet_exams')->label('CUET Exams'),
                TextColumn::make('created_at')->label('Created At')->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBook::route('/create'),
            'edit' => Pages\EditBook::route('/{record}/edit'),
        ];
    }
}
