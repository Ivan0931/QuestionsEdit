import { GIVE_ANSWER, ADD_ROW, ADD_COL } from './constants';

export const addRow = () => {
    return {
        type: ADD_ROW
    }
}

export const addCol = () => {
    return {
        type: ADD_COL
    }
}

export const handleAnswer = (rowIndex: number, colIndex: number) => {
    return {
        type: GIVE_ANSWER,
        payload: {
            rowIndex,
            colIndex
        }
    }
}