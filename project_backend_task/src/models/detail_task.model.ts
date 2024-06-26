import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.model';

@Entity()
export class DetailTask {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task_description: string;

  @OneToOne(() => Task, (task) => task.detail_task)
  task: Task;
}
