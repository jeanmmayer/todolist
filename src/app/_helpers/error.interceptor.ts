import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const retryRequest = request.clone();
        console.log("Chegou o request");

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                console.log("Não autorizado");
                this.authenticationService.authenticate().subscribe(
                    response => {
                        console.log("Tenta de novo");
                        return next.handle(retryRequest);
                    }
                );
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}