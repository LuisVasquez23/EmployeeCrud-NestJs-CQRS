import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDepartmentByIdQuery } from './get-department-by-id.query';
import { DepartmentRepository } from 'src/department/repository/department.repository';

@QueryHandler(GetDepartmentByIdQuery)
export class GetDepartmentByIdHandler
  implements IQueryHandler<GetDepartmentByIdQuery>
{
  // CONSTRUCTOR
  constructor(private readonly repository: DepartmentRepository) {}

  async execute(query: GetDepartmentByIdQuery): Promise<any> {
    const { id } = query;

    return await this.repository.GetById(id);
  }
}
