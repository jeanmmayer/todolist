import { Component } from '@angular/core';
import { AuthenticationService } from './_services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	auth_status = {
		'loading': true,
		'error': false,
		'error_message': ''
	};

	constructor(
		private authenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
		// On init, authenticate and load lists
		// it's logging in jean.michael@desafiofluig.com acc automatically
		this.authenticationService.authenticate().subscribe(
			response => {
				this.auth_status.loading = false;
			},
			err => {
				this.auth_status.loading = false;
				this.auth_status.error = true;
			}
		);
	}
}


