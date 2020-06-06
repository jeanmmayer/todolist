import { Component, Input } from '@angular/core';
import { Task } from 'src/app/_models';
import { TaskService } from 'src/app/_services';

@Component({
	selector: 'app-task-buttons',
	templateUrl: './task-buttons.component.html',
	styleUrls: ['./task-buttons.component.css']
})
export class TaskButtonsComponent {

  	@Input() task: Task;

  	constructor(
		private TaskService: TaskService
	) { }

	remove() {
		this.TaskService.remove(this.task.listId, this.task.id);
	}

	startEdit() {

	}

}
