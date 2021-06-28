import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle, editing, erase, completedAll, deletAllCompleted } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Hacer cosas'),
  new Todo('Otras cosas por hacer'),
  new Todo('Ir al mercadona'),
  new Todo('Comprar un poni de color amarillo melocoton'),
  new Todo('Si, y no hay mas que decir'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else return todo;
    });
  }),
  on(editing, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else return todo;
    });
  }),
  on(erase, (state, { id }) => state.filter((todo) => todo.id != id)),
  on(deletAllCompleted, (state) => state.filter((todo) => !todo.completed )),
  on(completedAll, (state, { completed }) =>
    state.map( todo =>  ({ ...todo, completed }) )
  )
);

export function todoReducer(state: any, action: Action): Todo[] {
  return _todoReducer(state, action);
}
