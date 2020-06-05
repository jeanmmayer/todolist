import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-new-list',
	templateUrl: './new-list.component.html',
	styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

	showField = false;

	@Input() listName: string = "";

	constructor() { }

	ngOnInit(): void {
	}

	openField() {
		this.showField = true;
	}

	closeField() {
		this.showField = false;
		this.listName = "";
	}

}
