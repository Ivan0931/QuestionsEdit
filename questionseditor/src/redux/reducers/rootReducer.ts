import { combineReducers, Reducer } from "redux";
import { State } from '../StoreConfig';
import { tableReducer } from './tableReducer';

export const rootReducer = combineReducers<State>({
    tableState: tableReducer
})