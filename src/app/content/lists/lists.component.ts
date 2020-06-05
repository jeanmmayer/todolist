import { Component, OnInit } from '@angular/core';
import { List } from '../../_models/list.model';

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
            "active": true
          },
          {
            "id": 2,
            "name": "Fazer tarefa",
            "active": false
          },
          {
            "id": 3,
            "name": "Fechar caderno",
            "active": false
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
            "active": false
          },
          {
            "id": 5,
            "name": "Fazer tarefa2",
            "active": false
          },
          {
            "id": 6,
            "name": "Fechar caderno2",
            "active": false
          },
        ]
      },
    ];
  }

  ngOnInit(): void {
  }

}
