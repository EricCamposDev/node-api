import {Student} from "../../domain/entities/student";

export interface IStudentsRepository {
    findById(id: string): Promise<Student | null>;
}