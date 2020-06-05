import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthInfo } from '../_models/auth-info.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private infoSubject: BehaviorSubject<AuthInfo>;
    public info: Observable<AuthInfo>;

    constructor(
        private http: HttpClient
    ) {
        this.infoSubject = new BehaviorSubject<AuthInfo>(JSON.parse(localStorage.getItem('auth-info')));
        this.info = this.infoSubject.asObservable();
    }

    public get tokenValues(): AuthInfo {
        return this.infoSubject.value;
    }

    authenticate() {
        return this.http.post<any>("/auth", {})
            .pipe(map(token => {
                // stores access_token
                localStorage.setItem('auth-info', JSON.stringify(token));
                this.infoSubject.next(token);
                return token;
            }));
    }

}