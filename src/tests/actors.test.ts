import request from 'supertest';
import { createConnection, getConnection, Repository } from 'typeorm';
import App from '../app';
import ActorsRoute from '../routes/actors.route';
import dbConnection from '../databases';
import { ActorEntity } from '../entities/actors.entity';

beforeAll(async () => {
  await createConnection(dbConnection);
});

afterAll(async () => {
  await getConnection().close();
});

describe('Testing Actors', () => {
  describe('[GET] /actors', () => {
    it('response findAll actors', async () => {
      const actorsRoute = new ActorsRoute();
      const actorRepository = new Repository<ActorEntity>();

      actorRepository.find = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Nicolas',
          yearOfBirth: 1919,
        },
      ]);

      const app = new App([actorsRoute]);
      return request(app.getServer()).get(`${actorsRoute.path}`).expect(200);
    });
  });
});
