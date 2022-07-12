import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'novomysql22',
      database: 'movies',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MoviesModule,
  ]
})
export class AppModule {}
