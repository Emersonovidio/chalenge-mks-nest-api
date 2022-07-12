import { Module } from '@nestjs/common';
import { MoviesController } from 'src/movies/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
})
export class MoviesModule {}