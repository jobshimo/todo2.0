import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'todoFilter',
})
export class FilterPipe implements PipeTransform {
  transform(todo: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todo.filter((todo) => todo.completed);

      case 'pending':
        return todo.filter((todo) => !todo.completed);

      default:
        return todo;
    }
  }
}
