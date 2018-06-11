import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoItems: any[] = [
    {
      id: 1,
      title: 'Todo item #1'
    },
    {
      id: 2,
      title: 'Todo item #2'
    },
    {
      id: 3,
      title: 'Todo item #3'
    },
    {
      id: 4,
      title: 'Todo item #4'
    },
    {
      id: 5,
      title: 'Todo item #5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
