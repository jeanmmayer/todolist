import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "src/app/_services";

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
  	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

	@Input() listId: string;

	taskName: string = "";
	loadingBtn: boolean = false;

	constructor(
		private TaskService: TaskService
	) {	}

	ngOnInit(): void {
		this.TaskService.onNewTask.subscribe(() => {
			this.taskName = "";
			this.loadingBtn = false;
		});
	}

	save() {
		this.loadingBtn = true;
		this.TaskService.insert(this.listId, this.taskName);
	};

}
