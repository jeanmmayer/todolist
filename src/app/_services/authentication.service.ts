import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthInfo } from '../_models/auth-info.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private infoSubject: BehaviorSubject<AuthInfo>;
    public info: Observable<AuthInfo>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.infoSubject = new BehaviorSubject<AuthInfo>(JSON.parse(localStorage.getItem('auth-info')));
        this.info = this.infoSubject.asObservable();
    }

    public get tokenValues(): AuthInfo {
        return this.infoSubject.value;
    }

    authenticate() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': `${environment.authGenerateToken}`
            })
        };
        return this.http.post<any>(`${environment.generateTokenUrl}`, {}, httpOptions)
            .pipe(map(token => {
                // stores access_token
                localStorage.setItem('auth-info', JSON.stringify(token));
                this.infoSubject.next(token);
                return token;
            }));
    }

}