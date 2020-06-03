import { Task } from '../tasks/task.model';

export interface List {
	id: number,
	name: string,
	tasks: Task[]
}