import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/_services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authenticationService.tokenValues;
        const isApiUrl = request.url.startsWith("/api/");

        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}