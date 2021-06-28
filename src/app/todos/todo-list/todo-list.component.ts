import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]=[];

  selectedFilter!: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('todos').subscribe( todos => this.todos = todos );
    this.store.subscribe(({todos, filter}) =>{
      this.todos          =  todos;
      this.selectedFilter = filter;
    })

  }

}
