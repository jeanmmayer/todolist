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

	list: any;
	page: number = 1;
	loadingLists = true;

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

		this.ListService.onListReady.subscribe((listWithTasks) => {
			this.list = listWithTasks;
			this.loadingLists = false;
		});

		this.TaskService.onDeleteTask.subscribe((listId) => {
			this.loadTasksByList(listId);
		});

		this.TaskService.onNewTask.subscribe((listId) => {
			this.loadTasksByList(listId);
        });
	};

	loadLists() {
		this.loadingLists = true;
		this.ListService.getLists(this.page);
	};

	loadTasksByList(listId) {
		this.TaskService.getTasksByList(listId).subscribe(tasks => {
			this.updateTasksByList(listId, tasks);
		});
	};

	updateTasksByList(listId, tasks) {
		let index = this.list.items.findIndex(x => x.id === listId);
		this.list.items[index].tasks = tasks.items;
	};

	nextPage() {
		if(this.list.hasNext) {
			this.page += 1;
			this.loadLists();
		}
	};

	previousPage() {
		if(this.page > 1) {
			this.page -= 1;
			this.loadLists();
		}
	};

}
