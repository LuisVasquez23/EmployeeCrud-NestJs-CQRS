import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllDepartmentsQuery } from '../features/queries/getAll/get-all-departments.query';
import { GetDepartmentByIdQuery } from '../features/queries/getById/get-department-by-id.query';
import { CreateDepartmentCommand } from '../features/commands/create/create-department.command';
import { UpdateDepartmentCommand } from '../features/commands/update/update-department.command';
import { DeleteDepartmentCommand } from '../features/commands/delete/delete-department.command';

@Controller('departments')
export class DepartmentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  // GET ALL
  @Get()
  async GetAllDepartments() {
    return await this.queryBus.execute(new GetAllDepartmentsQuery());
  }

  // GET BY ID
  @Get(':id')
  async GetDepartmentById(@Param('id') id: number) {
    return this.queryBus.execute(new GetDepartmentByIdQuery(id));
  }

  // CREATE DEPARTMENT
  @Post()
  async CreateDepartment(@Body() body) {
    const { name } = body;
    return this.commandBus.execute(new CreateDepartmentCommand(name));
  }

  // UPDATE DEPARTMENT
  @Put(':id')
  async UpdateDepartment(@Param('id') id: number, @Body() body) {
    const { name } = body;

    return this.commandBus.execute(new UpdateDepartmentCommand(id, name));
  }

  // DELETE DEPARTMENT
  @Delete(':id')
  async DeleteDepartment(@Param('id') id: number) {
    return this.commandBus.execute(new DeleteDepartmentCommand(id));
  }
}
