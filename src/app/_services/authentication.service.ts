import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthInfo } from 'src/app/_models/auth-info.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private infoSubject: BehaviorSubject<AuthInfo>;
    public info: Observable<AuthInfo>;

    onAuthStatusChange: EventEmitter<any> = new EventEmitter<any>();

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
                this.onAuthStatusChange.emit(true);
                return token;
            }));
    }

}