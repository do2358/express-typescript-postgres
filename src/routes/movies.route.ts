import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import MoviesController from '@/controllers/movies.controller';
import { CreateMovieDto } from '@/dtos/movies.dto';

class MoviesRoute implements Routes {
  public path = '/movies';
  public router = Router();
  public moviesController = new MoviesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateMovieDto, 'body'), this.moviesController.createMovie);
  }
}

export default MoviesRoute;
