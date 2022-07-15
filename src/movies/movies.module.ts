import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  Movie  from './movie.entity';
import { MoviesController } from 'src/movies/movies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
})
export class MoviesModule {}