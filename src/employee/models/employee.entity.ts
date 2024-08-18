import { DepartmentEntity } from 'src/department/models/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  position: string;

  @Column()
  salary: number;

  @ManyToOne(() => DepartmentEntity, (deparment) => deparment.employees)
  department: DepartmentEntity;
}
