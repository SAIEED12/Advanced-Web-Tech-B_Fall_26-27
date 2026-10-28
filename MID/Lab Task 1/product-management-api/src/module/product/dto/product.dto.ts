import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name is a mandatory Field' })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: 'Category is a mandatory Field' })
  @IsString()
  category!: string;

  @IsNotEmpty({ message: 'Price is a mandatory Field' })
  @IsNumber()
  @Min(0, { message: 'Price cannot be negative' })
  price!: number;

  @IsNotEmpty({ message: 'Quantity is a mandatory Field' })
  @IsNumber()
  @Min(0, { message: 'Quantity cannot be negative' })
  quantity!: number;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString()
  name!: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsString()
  category!: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Price cannot be negative' })
  price!: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Quantity cannot be negative' })
  quantity!: number;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
