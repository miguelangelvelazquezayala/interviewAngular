import { createReducer, on } from '@ngrx/store';
import { addItem, deleteItem } from './list-item.actions';

export interface State {
  items: string[];
}

const initialState: State = {
  items: ['The', 'elements', 'in', 'the', 'list', 'are', 'just', 'strings'],
};

export const listItemReducer = createReducer(
  initialState,
  on(addItem, (state: State, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(deleteItem, (state, { item }) => ({
    ...state,
    items: state.items.filter((filteredItem) => filteredItem !== item),
  }))
);
