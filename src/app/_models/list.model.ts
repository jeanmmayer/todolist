import { Task } from './task.model';

export interface List {
	id: number,
	name: string,
	tasks: Task[]
}