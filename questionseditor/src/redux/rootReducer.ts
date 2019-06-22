import { combineReducers, Reducer } from "redux";
import { State } from './StoreConfig';
import { tableReducer } from './reducers/tableReducer';

export const rootReducer = combineReducers<State>({
    tableState: tableReducer
})