use Filament\Forms\Components\{TextInput, Select, NumberInput, Textarea, FileUpload, RichEditor, URL, Section};

->schema([
    Section::make('Book Details')
        ->schema([
            TextInput::make('title')
                ->required()
                ->maxLength(255)
                ->placeholder('Enter book title'),
                
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
        ])->columns(2),

    Section::make('Stock & Pricing')
        ->schema([
            Select::make('stock_status')
                ->options([
                    'in_stock' => 'In Stock',
                    'out_of_stock' => 'Out of Stock',
                ])
                ->default('in_stock')
                ->required(),

            NumberInput::make('base_price')
                ->label('Base Price (USD)')
                ->numeric()
                ->min(1)
                ->required(),

            NumberInput::make('discounted_price')
                ->label('Discounted Price (USD)')
                ->numeric()
                ->min(0)
                ->helperText('Leave blank if no discount'),
        ])->columns(3),

    Section::make('Media & Description')
        ->schema([
            FileUpload::make('images')
                ->label('Book Images')
                ->multiple()
                ->image()
                ->maxFiles(5)
                ->maxSize(2048), // 2MB limit

            Textarea::make('short_description')
                ->maxLength(500)
                ->placeholder('Short description of the book'),

            RichEditor::make('description')
                ->placeholder('Full description...')
                ->columnSpanFull(),
        ]),

    Section::make('SEO & Metadata')
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

            URL::make('canonical_tag')
                ->label('Canonical URL')
                ->placeholder('https://example.com/book-title')
                ->helperText('Specify the preferred URL for this book.'),
        ]),
]);
