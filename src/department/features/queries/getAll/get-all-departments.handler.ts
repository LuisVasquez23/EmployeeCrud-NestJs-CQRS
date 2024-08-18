import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllDepartmentsQuery } from './get-all-departments.query';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@QueryHandler(GetAllDepartmentsQuery)
export class GetAllDepartmentsHandler
  implements IQueryHandler<GetAllDepartmentsQuery>
{
  constructor(private readonly repository: DepartmentRepository) {}

  async execute(query: GetAllDepartmentsQuery): Promise<any> {
    return await this.repository.GetAll();
  }
}
