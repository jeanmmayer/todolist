import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/_services';

@Component({
	selector: 'app-new-list',
	templateUrl: './new-list.component.html',
	styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

	showField: boolean = false;
	loadingBtn: boolean = false;

	@Input() listName: string = "";

	constructor(
		private ListService: ListService
	) { }

	ngOnInit(): void {
		this.ListService.onNewList.subscribe(() => {
			this.closeField();
        });
	}

	save() {
		this.loadingBtn = true;
		this.ListService.insert(this.listName);
	}

	openField() {
		this.showField = true;
	}

	closeField() {
		this.showField = false;
		this.listName = "";
		this.loadingBtn = false;
	}

}
