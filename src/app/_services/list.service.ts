import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ListService {
    constructor(private http: HttpClient) { }

    onNewList: EventEmitter<any> = new EventEmitter<any>();

    // Returns all lists with tasks
    getAll() {
        return this.http.get<any>('/api/lists?expand=tasks');
    }

    // Insert a list
    insert(name: string) {
        let params = {
            "name": name
        };
        return this.http.post<any>('/api/lists', params).subscribe((response) => {
            this.onNewList.emit();
        });
    }
}