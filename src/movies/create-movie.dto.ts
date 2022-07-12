import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MaxLength, IsPositive, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  title: string;

  @IsPositive()
  @IsInt()
  @IsNumber()
  @ApiProperty()
  production: number;

  @MaxLength(100)
  @IsString()
  @ApiProperty()
  gendre: string;
 
}