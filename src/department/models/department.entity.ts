import { EmployeeEntity } from 'src/employee/models/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.department)
  employees: EmployeeEntity[];
}
