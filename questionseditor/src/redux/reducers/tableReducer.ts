import {AnyAction} from 'redux';
import {ITableQuestionsStateProps} from '../../Components/TableQuestions';
import { ADD_ROW, ADD_COL, GIVE_ANSWER } from '../actions/constants';

export const tableInitialState: ITableQuestionsStateProps = {
        table: [[0]],
        tableInfo: {
            rowsCount: 1,
            columnsCount: 1,
            imagesCount: 0
        }
};

export function tableReducer(state: ITableQuestionsStateProps = tableInitialState, action: AnyAction): ITableQuestionsStateProps {
    switch(action.type) {
        case ADD_ROW: {
            const rowsCount = state.tableInfo.rowsCount;
            const newRow = Array(state.tableInfo.columnsCount).fill(0);
            const table = [...state.table, ...[newRow]];

            return {
                table,
                tableInfo: {
                    ...state.tableInfo,
                    rowsCount: rowsCount + 1
                }
            }
        }
        case ADD_COL: {
            const table = [...state.table];
            const columnsCount = state.tableInfo.columnsCount;

            for (let row of table) {
                row.push(0);
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
            const table = [...state.table];
            const { rowIndex, colIndex } = action.payload;

            // радио баттон все-таки подразумевает возможность отключения :D
            table[rowIndex][colIndex] = table[rowIndex][colIndex] ? 0 : 1;

            return {
                ...state,
                table
            }
        }
    }

    return state;
}