import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/_models';

@Component({
	selector: 'app-task-buttons',
	templateUrl: './task-buttons.component.html',
	styleUrls: ['./task-buttons.component.css']
})
export class TaskButtonsComponent implements OnInit {

  	@Input() task: Task;

  	constructor() { }

 	ngOnInit(): void {
	}

}
