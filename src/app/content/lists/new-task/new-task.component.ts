import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
  	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

	@Input() id_list: number;

	taskText: string = "";

	constructor() { }

	ngOnInit(): void { }

}
