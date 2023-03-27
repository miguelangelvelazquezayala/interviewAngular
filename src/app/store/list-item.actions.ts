import { createAction, props } from '@ngrx/store';

const NAMESPACE = `[List item]`;

export const ADD_ITEM = `${NAMESPACE} Add list item`;
export const DELETE_ITEM = `${NAMESPACE} Delete list item`;

export const addItem = createAction(ADD_ITEM, props<{ item: string }>());

export const deleteItem = createAction(DELETE_ITEM, props<{ item: string }>());
