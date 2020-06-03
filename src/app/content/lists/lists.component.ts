import { Component, OnInit } from '@angular/core';
import { List } from './list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  list: List[];

  constructor() {
    this.list = [
      {
        "id" : 1,
        "name" : "Lista 1",
        "tasks" : [
          {
            "id": 1,
            "name": "Abrir caderno",
            "status": 1
          },
          {
            "id": 2,
            "name": "Fazer tarefa",
            "status": 0
          },
          {
            "id": 3,
            "name": "Fechar caderno",
            "status": 0
          },
        ]
      },
      {
        "id" : 2,
        "name" : "Lista 2",
        "tasks" : [
          {
            "id": 4,
            "name": "Abrir caderno2",
            "status": 1
          },
          {
            "id": 5,
            "name": "Fazer tarefa2",
            "status": 1
          },
          {
            "id": 6,
            "name": "Fechar caderno2",
            "status": 0
          },
        ]
      },
    ];
  }

  ngOnInit(): void {
  }

}
