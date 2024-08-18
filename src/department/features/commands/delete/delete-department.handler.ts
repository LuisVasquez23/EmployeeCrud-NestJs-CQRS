import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteDepartmentCommand } from './delete-department.command';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@CommandHandler(DeleteDepartmentCommand)
export class DeleteDepartmentHandler
  implements ICommandHandler<DeleteDepartmentCommand>
{
  // CONSTRUCTOR
  constructor(private readonly repository: DepartmentRepository) {}

  async execute(command: DeleteDepartmentCommand): Promise<any> {
    const { id } = command;

    await this.repository.Delete(id);
  }
}
