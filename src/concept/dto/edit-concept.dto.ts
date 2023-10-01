import {
    IsDecimal,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';

export class EditConceptDto {
    @IsString()
    @IsOptional()
    description?: string;

    @IsDecimal()
    @IsOptional()
    unit_price?: number;

    @IsNumber()
    @IsOptional()
    quantity?: number;
}