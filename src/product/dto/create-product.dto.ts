import {
IsInt,
IsNotEmpty,
IsOptional,
IsString,
Min,
MinLength,
IsUrl,
} from "class-validator";

export class CreateProductDto {
@IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsInt()
    @Min(0)
    priceInCents: number;

    @IsInt()
    @Min(0)
    stock: number;

    @IsString()
    @IsNotEmpty()
    category: string;

}