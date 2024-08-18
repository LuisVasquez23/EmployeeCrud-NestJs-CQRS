import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateDepartmentCommand } from './create-department.command';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@CommandHandler(CreateDepartmentCommand)
export class CreateDepartmentHandler
  implements ICommandHandler<CreateDepartmentCommand>
{
  // CONSTRUCTOR
  constructor(private readonly repository: DepartmentRepository) {}

  execute(command: CreateDepartmentCommand): Promise<any> {
    const { name } = command;

    return this.repository.Create({ name });
  }
}
