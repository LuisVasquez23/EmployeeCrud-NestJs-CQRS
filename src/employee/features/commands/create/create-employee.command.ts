export class CreateEmployeeCommand {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
    public readonly position: string,
    public readonly salary: number,
    public readonly departmentId: number,
  ) {}
}
