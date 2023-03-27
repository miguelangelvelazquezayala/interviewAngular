import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './list-item.reducer';

export const getListItemsState = createFeatureSelector<State>('list-item');

export const getList = createSelector(
  getListItemsState,
  (state: State) => state.items
);
