import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    onNewTask: EventEmitter<any> = new EventEmitter<any>();
    onDeleteTask: EventEmitter<any> = new EventEmitter<any>();
    onUpdateTask: EventEmitter<any> = new EventEmitter<any>();

    getTasksByList(listId: string) {
        return this.http.get<any>(`/api/lists/${listId}/tasks?expand=status`);
    };

    insert(listId: string, name: string) {
        let params = {
            "name": name
        };

        return this.http.post<any>(`/api/lists/${listId}/tasks`, params).subscribe(
			response => {
                this.onNewTask.emit(listId);
            },
			err => {
                // console.log(err);
            }
		);
    };

    close(listId: string, taskId: string) {
        let params = {
            'id': taskId,
            'listId': listId
        };

        return this.http.post<any>(`/api/lists/${listId}/tasks/${taskId}/close`, params).subscribe(() => {
            this.onUpdateTask.emit(taskId);
        });
    };

    open(listId: string, taskId: string) {
        let params = {
            'id': taskId,
            'listId': listId
        };

        return this.http.post<any>(`/api/lists/${listId}/tasks/${taskId}/open`, params).subscribe(() => {
            this.onUpdateTask.emit(taskId);
        });
    };

    remove(listId: string, taskId: string) {
        return this.http.delete<any>(`/api/lists/${listId}/tasks/${taskId}`).subscribe(() => {
            this.onDeleteTask.emit(listId);
        });
    };
}