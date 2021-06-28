import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  completedAll: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completedAll = !this.completedAll;
    this.store.dispatch(actions.completedAll({completed: this.completedAll}));
  }
}
