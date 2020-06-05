import { Component, OnInit  } from '@angular/core';
import { List } from 'src/app/_models/list.model';
import { ListService } from 'src/app/_services';
import { TaskService } from 'src/app/_services';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

	list: List[];

	constructor(
		private ListService: ListService,
		private TaskService: TaskService,
		private AuthenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
		this.AuthenticationService.onAuthStatusChange.subscribe((isAuth) => {
			if(isAuth) {
				this.loadLists();
			}
		});

		this.ListService.onNewList.subscribe(() => {
			this.loadLists();
		});

		this.TaskService.onNewTask.subscribe((id_list) => {
			this.loadTasksByList(id_list);
        });
	};

	loadLists() {
		this.ListService.getAll().subscribe(lists => {
			this.list = lists.items;
		});
	};

	loadTasksByList(id_list) {
		this.TaskService.getTasksByList(id_list).subscribe(tasks => {
			this.updateTasksByList(id_list, tasks);
		});
	};

	updateTasksByList(id_list, tasks) {
		let index = this.list.findIndex(x => x.id === id_list);
		this.list[index].tasks = tasks.items;
	};

}
