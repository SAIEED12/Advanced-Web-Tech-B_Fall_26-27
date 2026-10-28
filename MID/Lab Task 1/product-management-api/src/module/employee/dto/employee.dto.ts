import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Name is a mandatory Field' })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: 'Email is a mandatory Field' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string;

  @IsNotEmpty({ message: 'Phone is a mandatory Field' })
  @IsString()
  phone!: string;

  @IsNotEmpty({ message: 'Password is a mandatory Field' })
  @IsString()
  password!: string;

  @IsNotEmpty({ message: 'Age is a mandatory Field' })
  @IsInt({ message: 'Age must be an integer' })
  @Min(18, { message: 'Age must be at least 18' })
  age!: number;

  @IsNotEmpty({ message: 'Years of working is a mandatory Field' })
  @IsInt({ message: 'Years of working must be an integer' })
  @Min(0, { message: 'Years of working cannot be negative' })
  yearsOfWorking!: number;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString()
  name!: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Phone cannot be empty' })
  @IsString()
  phone!: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsString()
  password!: string;

  @IsOptional()
  @IsInt({ message: 'Age must be an integer' })
  @Min(18, { message: 'Age must be at least 18' })
  age!: number;

  @IsOptional()
  @IsInt({ message: 'Years of working must be an integer' })
  @Min(0, { message: 'Years of working cannot be negative' })
  yearsOfWorking!: number;

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
