import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    insert(id_list: number, name: string) {
        let params = {
            'dto': name,
            'listId': id_list
        };

        return this.http.post<any>(`api/lists/${id_list}/tasks`, params);
    }

    updateCheck(id_task: number, new_status: string) {

    }

    updateName() {

    }

    remove() {

    }
}