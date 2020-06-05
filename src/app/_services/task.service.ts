import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    onNewTask: EventEmitter<any> = new EventEmitter<any>();

    getTasksByList(id_list: string) {
        return this.http.get<any>(`/api/lists/${id_list}/tasks`);
    };

    insert(id_list: number, name: string) {
        let params = {
            "name": name
        };

        return this.http.post<any>(`/api/lists/${id_list}/tasks`, params).subscribe(
			response => {
                this.onNewTask.emit(id_list);
            },
			err => {
                console.log(err);
            }
		);
    };

    updateCheck(id_list: number, id_status: number, new_status: string) {
        let params = {
            'statusType': new_status
        };

        return this.http.patch<any>(`/api/lists/${id_list}/task-status/${id_status}`, params);
    };

    updateName() {

    };

    remove(id_list: number, id_task: number) {
        return this.http.get<any>(`/api/lists/${id_list}/tasks/${id_task}`);
    };
}