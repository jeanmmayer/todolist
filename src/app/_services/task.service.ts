import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    getAll(id_list: number) {
        let params = {
            'id_list': id_list
        };

        // return this.http.get<any>(`${environment.apiUrl}/tasks`, params);
    }
}