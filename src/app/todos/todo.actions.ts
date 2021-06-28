import { createAction, props } from '@ngrx/store';


export const create = createAction('[TODO] Create Todo',
props<{ text: string}>()
);
export const toggle = createAction('[TODO] Toggle Todo',
props<{ id: number}>()
);
export const editing = createAction('[TODO] Editing Todo',
props<{ id: number, text:string}>()
);
export const erase = createAction('[TODO] Erase Todo',
props<{ id: number}>()
);
export const completedAll = createAction('[TODO] CompletedAll Todo',
props<{ completed: boolean}>()
);
export const deletAllCompleted = createAction('[TODO] DeleteAllCompleted Todo'
);
