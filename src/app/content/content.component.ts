import { Component, OnInit } from '@angular/core';
// import { ErrorInterceptor } from 'src/app/_helpers';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor(
		// private ErrorInterceptor: ErrorInterceptor
	) { }

	authFailed = false;

	ngOnInit(): void {
		// this.ErrorInterceptor.onAuthFail.subscribe(response => {
		// 	this.authFailed = true;
		// });
	}

}
