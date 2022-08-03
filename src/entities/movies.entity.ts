import { Movie } from '@interfaces/movies.interface';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { ActorEntity } from './actors.entity';

@Entity({ name: 'movies' })
export class MovieEntity extends BaseEntity implements Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => ActorEntity)
  @JoinTable({ name: 'movies_actors' })
  actors: ActorEntity[];

  @Column()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
