import {
    IsDecimal,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

export class CreateConceptDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDecimal()
    @IsNotEmpty()
    unit_price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}