import React from "react";
import { connect } from 'react-redux';
import {addRow, handleAnswer, addColumn} from '../redux/actions/tableActions';
import { Grid, Radio } from "@material-ui/core";
import {IAppState} from '../redux/StoreConfig';

interface ITableQuestionsDispatchProps {
    addRow: () => void;
    addColumn: () => void;
    handleAnswer: (rowIndex: number, colIndex: number) => void;
}

interface TableInfo {
    rowsCount: number;
    columnsCount: number;
    imagesCount: number;
}

export interface ITableQuestionsStateProps {
    table: Array<Array<number>>;
    tableInfo: TableInfo;
}

type TProps = ITableQuestionsStateProps & ITableQuestionsDispatchProps;

class TableQuestionsComponent extends React.Component<TProps> {

    // конструктор, если не вызывать его напрямую, будет вызван неявно ровно в том же виде,
    // как в твоей записи (с вызовом сапер и передачей в него аргументов)
    // это поведение по-умолчанию в js классах

    render(): JSX.Element {
        const { table, addRow, addColumn, handleAnswer } = this.props;
        return (
          <>
            <Grid container>
                <Grid item xs={1}/>
                {
                    table[0].map((v, i) => {
                        return (
                            <Grid item xs={1} key={i}>{`col${i+1}`}</Grid>
                        )
                    })
                }
            </Grid>
             {
                table.map((row, i) => {
                    return (
                        <Grid container key={`row${i}`}>
                            <Grid item xs={1}>{`row${i + 1}`}</Grid>
                            {
                                row.map((value, j) => {
                                    return (
                                        <Grid item xs={1} key={`col${j}`}>
                                            <div onClick={() => handleAnswer(i, j)}>
                                                <Radio key={`radio-button_${i}${j}`} checked={!!value}/>
                                            </div>
                                        </Grid>
                                    );
                                })
                            }
                            {i === 0 && <div onClick={addColumn}>+</div>}
                        </Grid>
                    );
                })
            }
            <Grid container>
                <Grid item xs={1}>
                    <div onClick={addRow}>+</div>
                </Grid>
            </Grid>
          </>
        )  
      }
}

const mapStateToProps = (state: IAppState): ITableQuestionsStateProps => ({
    table: state.tableState.table,
    tableInfo: state.tableState.tableInfo
});

const mapDispatchToProps: ITableQuestionsDispatchProps = {
    addRow,
    addColumn,
    handleAnswer,
};

export const TableQuestions = connect<ITableQuestionsStateProps, ITableQuestionsDispatchProps, {}, IAppState>(
    mapStateToProps,
    mapDispatchToProps
)(TableQuestionsComponent);