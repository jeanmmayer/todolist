import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor(
		private AuthenticationService: AuthenticationService
	) { }

	authFailed = false;

	ngOnInit(): void {
		this.AuthenticationService.onAuthStatusChange.subscribe(response => {
			this.authFailed = true;
		});
	}

}
