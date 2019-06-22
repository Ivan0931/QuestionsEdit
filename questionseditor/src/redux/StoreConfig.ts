import { Store, createStore } from "redux";
import { rootReducer } from './rootReducer';

export interface TableInfo {
    rowsCount?: number;
    columnsCount?: number;
    imagesCount?: number;
}

export interface TableState {
    table: Array<Array<number>>;
    tableInfo?: TableInfo;
}

export interface State {
    tableState: TableState;
}

export const defaultState: State = {
    tableState: {
        table: [[0]],
        tableInfo: {
            rowsCount: 1,
            columnsCount: 1,
            imagesCount: 0
        }
    }
}

export const store: Store = createStore(rootReducer)
