import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'QuanLyCongViec',
      entities: ['Task', 'Company', 'Detail_Task', 'Project', 'Staff'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
