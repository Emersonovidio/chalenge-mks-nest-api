import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/movies/movie.entity';
import { CreateMovieDto } from 'src/movies/create-movie.dto';

@Controller('movie')
export class MoviesController {
  constructor(@InjectRepository(Movie) private readonly moviesRepository: Repository<Movie>) {}

  @Post()
  public async create(@Body() createMovieDto: CreateMovieDto) :Promise<Movie> {
    const movie = this.moviesRepository.create(createMovieDto);
    await this.moviesRepository.save(movie);

    return movie;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    const movie = this.moviesRepository.findOne(id);
    return movie;

  }

  @Get()
  public async getAll(): Promise<Movie[]> {

    const movies= await this.moviesRepository.find();
    return movies;
  }

  @Put(':id')
   async updateMovie(@Param('id') id: number, @Body() body: CreateMovieDto)
  { const movie = this.moviesRepository.findOne({ where: { id } });

  await this.moviesRepository.update({ id }, body);
   
  }


  @Delete(':id')
   async deleteMovie(@Param('id') id:number) {
    const movie = await this.moviesRepository.findOne({ where: { id } });

    await this.moviesRepository.delete(id);
  }
}
