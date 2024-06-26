import { Controller } from '@nestjs/common';
import { DetailTaskService } from './detail_task.service';

@Controller()
export class DetailTaskController {
  constructor(private readonly detailTaskService: DetailTaskService) {}
}
