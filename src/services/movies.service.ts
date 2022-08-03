import { EntityRepository, Repository } from 'typeorm';
import { CreateMovieDto } from '@dtos/movies.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { MovieEntity } from '@/entities/movies.entity';
import { Movie } from '@/interfaces/movies.interface';

@EntityRepository()
class MovieService extends Repository<MovieEntity> {
  public async createMovie(movieData: CreateMovieDto): Promise<Movie> {
    if (isEmpty(movieData)) throw new HttpException(400, 'movieData is empty');

    const existedMovie: Movie = await MovieEntity.findOne({ where: { title: movieData.title } });
    if (existedMovie) throw new HttpException(409, `This movie ${movieData.title} already exists`);

    const createMovieData: Movie = await MovieEntity.create(movieData).save();

    return createMovieData;
  }
}

export default MovieService;
