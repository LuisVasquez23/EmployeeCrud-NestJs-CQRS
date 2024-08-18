import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from './create-employee.command';
import { EmployeeRepository } from 'src/employee/repository/employee.repository';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler
  implements ICommandHandler<CreateEmployeeCommand>
{
  // CONSTRUCTOR
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly departmentRepository: DepartmentRepository,
  ) {}

  // EXECUTE
  async execute(command: CreateEmployeeCommand): Promise<any> {
    const department = await this.departmentRepository.GetById(
      command.departmentId,
    );

    const employee = {
      firstName: command.firstname,
      lastName: command.lastname,
      position: command.position,
      salary: command.salary,
      department: department,
    };

    return await this.employeeRepository.Create(employee);
  }
}
