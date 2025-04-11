<?php

namespace App\Filament\Resources\BooksqResource\Pages;

use App\Filament\Resources\BooksqResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBooksq extends EditRecord
{
    protected static string $resource = BooksqResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
