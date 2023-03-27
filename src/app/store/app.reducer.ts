import { ActionReducerMap } from '@ngrx/store';
import { State } from './app.state';
import { listItemReducer } from './list-item.reducer';

export const reducers: ActionReducerMap<State> = {
  listItem: listItemReducer,
};
