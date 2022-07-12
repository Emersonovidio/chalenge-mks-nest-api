import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/movies/movie.entity';
import { CreateMovieDto } from 'src/movies/create-movie.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('movie')
@ApiTags('movies')
export class MoviesController {
  constructor(@InjectRepository(Movie) private readonly moviesRepository: Repository<Movie>) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo filme'})
  public async create(@Body() createMovieDto: CreateMovieDto) :Promise<Movie> {
    const movie = this.moviesRepository.create(createMovieDto);
    await this.moviesRepository.save(movie);

    return movie;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um filme pelo id'})
  public async findOne(@Param('id') id: number) {
    const movie = await this.moviesRepository.findOne({ where: { id } } );

    return movie;
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os filmes'})
  public async getAll(): Promise<Movie[]> {
    const movie = await this.moviesRepository.find();

    return movie;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um filme pelo id'})
   async updateMovie(@Param('id') id: number, @Body() body: CreateMovieDto){
   const movie = this.moviesRepository.findOne({ where: { id } });

  await this.moviesRepository.update({ id }, body);
   
  }


  @Delete(':id')
  @ApiOperation({ summary: 'Remove um filme da lista'})
   async deleteMovie(@Param('id') id:number) {
    const movie = await this.moviesRepository.findOne({ where: { id } });

    await this.moviesRepository.delete(id);
  }
}
