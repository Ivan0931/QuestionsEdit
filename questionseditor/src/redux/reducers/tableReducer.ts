import { State, defaultState, TableState } from '../StoreConfig';
import { ADD_ROW } from './../actions/constants';
import { store } from './../StoreConfig';

export const tableReducer = (state: TableState = defaultState.tableState, action: {type: string, payload: any}): TableState => {
    switch(action.type) {
        case ADD_ROW:
            const tableState = store.getState().tableState;
            const rowsCount = tableState.tableInfo.rowsCount;
            const newRow = Array(tableState.tableInfo.columnsCount).fill(0);
            const table = [...tableState.table, ...newRow];

            return {
                table,
                tableInfo: {
                    ...tableState.tableInfo,
                    rowsCount: rowsCount + 1,
                }
            } 
        
    }

    return state;
}