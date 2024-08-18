import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from './models/department.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { DepartmentController } from './controllers/department.controller';
import { CreateDepartmentHandler } from './features/commands/create/create-department.handler';
import { UpdateDepartmentHandler } from './features/commands/update/update-department.handler';
import { GetAllDepartmentsHandler } from './features/queries/getAll/get-all-departments.handler';
import { GetDepartmentByIdHandler } from './features/queries/getById/get-department-by-id.handler';
import { DeleteDepartmentHandler } from './features/commands/delete/delete-department.handler';
import { EmployeeModule } from 'src/employee/employee.module';
import { DepartmentRepository } from './repository/department.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DepartmentEntity]),
    CqrsModule,
    forwardRef(() => EmployeeModule),
  ],
  controllers: [DepartmentController],
  providers: [
    DepartmentRepository,
    GetAllDepartmentsHandler,
    GetDepartmentByIdHandler,
    CreateDepartmentHandler,
    UpdateDepartmentHandler,
    DeleteDepartmentHandler,
  ],
  exports: [TypeOrmModule],
})
export class DepartmentModule {}
