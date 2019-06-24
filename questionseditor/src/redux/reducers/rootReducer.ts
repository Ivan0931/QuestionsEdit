import { combineReducers } from "redux";
import { IAppState } from '../StoreConfig';
import { tableReducer } from './tableReducer';

export const rootReducer = combineReducers<IAppState>({
    tableState: tableReducer
})