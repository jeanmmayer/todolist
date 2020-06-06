import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	@Input() task: any;

	constructor(
		private TaskService: TaskService
	) { }

	ngOnInit(): void {
		this.TaskService.onUpdateTask.subscribe((taskId) => {
			console.log(taskId);
		});
	};

	toggleCheck() {
		if(this.task.status.name == "Fechado") {
			this.open();
		} else {
			this.close();
		}
	};

	open() {
		this.TaskService.open(this.task.listId, this.task.id);
	};

	close() {
		this.TaskService.close(this.task.listId, this.task.id);
	};

}
