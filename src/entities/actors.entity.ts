import { Actor } from '@/interfaces/actors.interface';
import { IsNotEmpty } from 'class-validator';
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import moment from 'moment';

@Entity({ name: 'actors' })
export class ActorEntity extends BaseEntity implements Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ name: 'year_of_birth' })
  yearOfBirth: number;

  protected age: number;

  @AfterLoad()
  calculateAge() {
    this.age = moment().year() - this.yearOfBirth;
  }

  @Column()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
