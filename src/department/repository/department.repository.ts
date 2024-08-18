import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentEntity } from '../models/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentRepository {
  // Constructor
  constructor(
    @InjectRepository(DepartmentEntity)
    private respository: Repository<DepartmentEntity>,
  ) {}

  // CREATE DEPARTMENT
  async Create(
    department: Partial<DepartmentEntity>,
  ): Promise<DepartmentEntity> {
    return this.respository.save(department);
  }

  // GET DEPARTMENT BY ID
  async GetById(id: number): Promise<DepartmentEntity> {
    return this.respository.findOneBy({ id });
  }

  // GET ALL DEPARTMENTS
  async GetAll(): Promise<DepartmentEntity[]> {
    return this.respository.find();
  }

  // UPDATE DEPARTMENT
  async Update(
    id: number,
    deparment: Partial<DepartmentEntity>,
  ): Promise<void> {
    await this.respository.update(id, deparment);
  }

  // DELETE DEPARTMENT
  async Delete(id: number): Promise<void> {
    await this.respository.delete(id);
  }
}
