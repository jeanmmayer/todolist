import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "src/app/_services";

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
  	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

	@Input() id_list: number;

	taskName: string = "";

	constructor(
		private TaskService: TaskService
	) {	}

	ngOnInit(): void {
		this.TaskService.onNewTask.subscribe(() => {
			this.taskName = "";
		});
	}

	save() {
		this.TaskService.insert(this.id_list, this.taskName);
	};

}
