import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/_services';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     constructor(private authenticationService: AuthenticationService) { }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return true;
        // const retryRequest = request.clone();

        // return next.handle(request).pipe(catchError(err => {
            // if (err.status === 401) {
            //    this.authenticationService.authenticate();
            //    return next.handle(retryRequest);
            // }
        //     console.log(err);
            // const error = err.error.message || err.statusText;
            // return throwError(error);
        // }));
    // }
// }