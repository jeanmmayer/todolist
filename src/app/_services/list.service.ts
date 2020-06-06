import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';


@Injectable({ providedIn: 'root' })
export class ListService {
    constructor(
        private http: HttpClient,
        private TaskService: TaskService
    ) { }

    onNewList: EventEmitter<any> = new EventEmitter<any>();
    onListReady: EventEmitter<any> = new EventEmitter<any>();

    // Returns all lists with tasks
    getLists(page: number) {
        this.http.get<any>(`/api/lists?pageSize=5&page=${page}&order=name&active=true`).subscribe(lists => {
            return this.setTasksForLists(lists);
		});
    };

    // Insert a list
    insert(name: string) {
        let params = {
            "name": name
        };
        return this.http.post<any>('/api/lists', params).subscribe((response) => {
            this.onNewList.emit();
        });
    };

    setTasksForLists(lists) {
        // Not a good approach to get tasks WITH status
        for(let i = 0; i < lists.items.length; i++) {
            this.TaskService.getTasksByList(lists.items[i].id).subscribe(tasks => {
                lists.items[i].tasks = tasks;
            });
        }
        this.onListReady.emit(lists);
    };

}