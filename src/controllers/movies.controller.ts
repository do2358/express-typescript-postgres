import { NextFunction, Request, Response } from 'express';
import MovieService from '@/services/movies.service';
import { CreateMovieDto } from '@/dtos/movies.dto';
import { Movie } from '@/interfaces/movies.interface';

class MoviesController {
  public movieService = new MovieService();

  public createMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const movieData: CreateMovieDto = req.body;
      const createMovieData: Movie = await this.movieService.createMovie(movieData);

      res.status(201).json({ data: createMovieData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MoviesController;
