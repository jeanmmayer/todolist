import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { ListService } from './_services';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
		private authenticationService: AuthenticationService,
		private listService: ListService
	) { }

	ngOnInit() {
		this.authenticationService.authenticate();
		this.loadLists();
	}

	loadLists() {
		this.listService.getAll().pipe(first()).subscribe(lists => {
			// this.lists = lists;
			console.log(lists);
		});
	}
}


