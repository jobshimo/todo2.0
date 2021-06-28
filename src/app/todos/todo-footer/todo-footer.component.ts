import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import * as todosActions from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  selectedFilter: actions.validFilters = 'all';
  filters: actions.validFilters[]= ['all', 'pending','completed'];
  pending:number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filter')
    //   .subscribe((filter) => (this.selectedFilter = filter));
    this.store.subscribe( state =>{
      this.selectedFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length

    })
  }

  translateFilter(filter:string){
   return filter === 'all'       ? 'Todas' :
          filter === 'completed' ? 'Completadas' :
          filter === 'pending'   ? 'Activas' : '';
  }

  changeFilter(filter:actions.validFilters){
    this.store.dispatch(actions.setFilter({filter}))
  }
  deleteAllCompleted(){
    this.store.dispatch(todosActions.deletAllCompleted())
  }
}
