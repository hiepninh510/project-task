import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailTask } from 'src/models/detail_task.model';
import { Repository } from 'typeorm';

@Injectable()
export class DetailTaskService {
  constructor(
    @InjectRepository(DetailTask)
    private readonly detailTaskResponitory: Repository<DetailTask>,
  ) {}

  async findTaskID(id: string): Promise<DetailTask> {
    return this.detailTaskResponitory.findOne({ where: { id } });
  }
}
