import { EntityRepository, Repository } from 'typeorm';
import { ActorEntity } from '@/entities/actors.entity';
import { Actor } from '@/interfaces/actors.interface';

@EntityRepository()
class ActorService extends Repository<ActorEntity> {
  public async findAllActor(filter): Promise<Actor[]> {
    const actors: Actor[] = await ActorEntity.find(filter);
    return actors;
  }
}

export default ActorService;
