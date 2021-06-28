import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';


export const initialState:validFilters = 'all';
const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state:any, {filter}) => {
    state = filter;
    return state
})
);
export function filterReducer(state:any, action:Action) {
  return _filterReducer(state, action);
}
