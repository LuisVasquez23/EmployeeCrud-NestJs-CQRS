import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateDepartmentCommand } from './update-department.command';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@CommandHandler(UpdateDepartmentCommand)
export class UpdateDepartmentHandler
  implements ICommandHandler<UpdateDepartmentCommand>
{
  // CONSTRUCTOR
  constructor(private readonly repository: DepartmentRepository) {}

  async execute(command: UpdateDepartmentCommand): Promise<any> {
    const { id, name } = command;

    const department = await this.repository.GetById(id);

    if (!department) {
      throw new Error('Department not found');
    }

    department.name = name;

    return this.repository.Update(id, department);
  }
}
