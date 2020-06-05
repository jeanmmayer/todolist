import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/_models/task.model';
import { TaskService } from 'src/app/_services/task.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	@Input() task: any;
	completed_icon = 'check_box_outline_blank';

	constructor() { }

	ngOnInit(): void {
		this.defineIcon();
	};

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
