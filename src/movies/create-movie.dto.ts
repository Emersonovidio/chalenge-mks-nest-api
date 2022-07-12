import { IsString, IsInt, MaxLength, IsPositive, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @MaxLength(255)
  @IsString()
  title: string;

  @IsPositive()
  @IsInt()
  @IsNumber()
  year: number;

  @MaxLength(100)
  @IsString()
  gendre: string;

  @IsPositive()
  @IsInt()
  @IsNumber()
  range: number;
}