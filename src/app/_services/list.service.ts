import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ListService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>('/api/lists');
    }
}