import { Injectable, EventEmitter } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    // onAuthFail: EventEmitter<any> = new EventEmitter<any>();

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const retryRequest = request.clone();

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.authenticate().subscribe(
                    response => {
                        return next.handle(retryRequest);
                    },
                    error => {
                        // this.onAuthFail.emit();
                    }
                );
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}