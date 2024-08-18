import { forwardRef, Module } from '@nestjs/common';
import { EmployeeController } from './controllers/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './models/employee.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateEmployeeHandler } from './features/commands/create/create-employee.handler';
import { EmployeeRepository } from './repository/employee.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]),
    CqrsModule,
    forwardRef(() => EmployeeModule),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeRepository, CreateEmployeeHandler],
  exports: [TypeOrmModule],
})
export class EmployeeModule {}
