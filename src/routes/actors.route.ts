import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ActorsController from '@/controllers/actors.controller';

class ActorsRoute implements Routes {
  public path = '/actors';
  public router = Router();
  public actorsController = new ActorsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.actorsController.getActors);
  }
}

export default ActorsRoute;
