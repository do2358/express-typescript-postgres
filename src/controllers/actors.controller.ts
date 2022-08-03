import { NextFunction, Request, Response } from 'express';
import ActorService from '@/services/actors.service';
import { Actor } from '@/interfaces/actors.interface';

class ActorsController {
  public actorService = new ActorService();

  public getActors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filter = req.query;
      const findAllActorsData: Actor[] = await this.actorService.findAllActor(filter);

      res.status(200).json({ data: findAllActorsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default ActorsController;
