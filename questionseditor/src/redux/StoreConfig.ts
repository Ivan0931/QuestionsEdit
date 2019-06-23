import { Store, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { rootReducer } from './reducers/rootReducer';

export interface TableInfo {
    rowsCount?: number;
    columnsCount?: number;
    imagesCount?: number;
}

export interface TableState {
    table?: Array<Array<number>>;
    tableInfo?: TableInfo;
}

export interface State {
    tableState: TableState;
}

export const store: Store = createStore(rootReducer, applyMiddleware(logger));
