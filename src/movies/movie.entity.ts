import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Movie")
export default class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  production: number;

  @Column()
  gendre: string;

}
