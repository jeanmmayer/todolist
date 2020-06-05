import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../_models/task.model';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	@Input() task: Task;
	completed_icon = 'check_box_outline_blank';

	constructor() {
	}

	ngOnInit(): void {
		this.defineIcon();
	}

	toggleCheck() {
		this.task.active = !this.task.active;
		this.defineIcon();
	}

	defineIcon() {
		if (this.task.active) {
			this.completed_icon = 'check_box';
		} else {
			this.completed_icon = 'check_box_outline_blank';
		}
	}
}
