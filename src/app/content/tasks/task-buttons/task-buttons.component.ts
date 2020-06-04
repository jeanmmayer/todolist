import { Component, OnInit, Input } from '@angular/core';
import { TaskButtons } from '../../../_models/task-buttons.model';

@Component({
	selector: 'app-task-buttons',
	templateUrl: './task-buttons.component.html',
	styleUrls: ['./task-buttons.component.css']
})
export class TaskButtonsComponent implements OnInit {

  	@Input() id: TaskButtons;

  	constructor() { }

 	ngOnInit(): void {
	}

}
