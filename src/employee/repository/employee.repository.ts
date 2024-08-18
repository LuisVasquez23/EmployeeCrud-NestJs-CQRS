import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../models/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(EmployeeEntity)
    private repository: Repository<EmployeeEntity>,
  ) {}

  // CREATE EMPLOYEE
  async Create(employee: Partial<EmployeeEntity>): Promise<EmployeeEntity> {
    return await this.repository.save(employee);
  }

  // GET EMPLOYEE BY ID
  async GetById(id: number): Promise<EmployeeEntity> {
    return this.repository.findOne({
      where: { id },
      relations: ['department'],
    });
  }

  // GET ALL EMPLOYEES
  async GetAll(): Promise<EmployeeEntity[]> {
    return this.repository.find();
  }

  // UPDATE EMPLOYEE
  async Update(id: number, employee: Partial<EmployeeEntity>): Promise<void> {
    await this.repository.update(id, employee);
  }

  // DELETE EMPLOYEE
  async Delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
