import { Actor } from '@/interfaces/actors.interface';
import { IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsOptional()
  public actors: Actor[];
}
