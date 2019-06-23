import { TableState, State } from '../StoreConfig';
import { store } from './../StoreConfig';
import { ADD_ROW, ADD_COL, GIVE_ANSWER } from '../actions/constants';

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

export function tableReducer(state: TableState = defaultState.tableState, action: {type: string, payload: any}): TableState {
    switch(action.type) {
        case ADD_ROW: {
            const rowsCount = state.tableInfo!.rowsCount!;
            const newRow = Array(state.tableInfo!.columnsCount).fill(0);
            const table = [...state.table!, ...[newRow]];

            return {
                table,
                tableInfo: {
                    ...state.tableInfo,
                    rowsCount: rowsCount + 1
                }
            }
        }
        case ADD_COL: {
            const table = [...state.table!];
            const columnsCount = state.tableInfo!.columnsCount!;

            for(let row of table) {
                row.push(0)
            }

            return {
                table,
                tableInfo: {
                    ...state.tableInfo,
                    columnsCount: columnsCount + 1,
                }
            }
        }
        case GIVE_ANSWER: {
            const table = [...state.table!];
            const columnsCount = state.tableInfo!.columnsCount!;
            const { rowIndex, colIndex } = action.payload;
            
            if (!table[rowIndex][colIndex]) {
                table[rowIndex] = Array(columnsCount).fill(0);
                table[rowIndex][colIndex] = 1;

                return {
                    ...state,
                    table
                }
            }
        }
    }

    return state;
}