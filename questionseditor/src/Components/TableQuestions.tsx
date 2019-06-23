import React from "react";
import { TableState } from "../redux/StoreConfig";
import { connect } from 'react-redux';
import { addRow, addCol, handleAnswer } from "../redux/actions/tableActions";
import { Grid, Radio, Icon } from "@material-ui/core";

interface TableQuestionsProps {
    table?: Array<Array<number>>;
    columnsCount?: number;
    addRow?: () => void;
    addColumn?: () => void;
    handleAnswer?: (rowIndex: number, colIndex: number) => void;
}

class TableQuestions extends React.Component<TableQuestionsProps, {}> {
    constructor(props: TableQuestionsProps) {
        super(props);
    }

    render(): JSX.Element {
        const { table, addRow, addColumn, handleAnswer, columnsCount } = this.props;
        return (
          <>
            <Grid container key={'row_header'}>
                <Grid item xs={1}/>
                {
                    table && table[0].map((v, i) => {
                        return (
                            <Grid item xs={1}>{`col${i+1}`}</Grid>
                        )
                    })
                }
            </Grid>
             {
                table && table.map((row, i) => {
                    return (
                        <>  
                            <Grid container key={`row${i}`}>
                                <Grid item xs={1}>{`row${i+1}`}</Grid>
                                {
                                    row.map((value, j) => {
                                        return (
                                            <Grid item xs={1}>
                                                <div onClick={() => handleAnswer && handleAnswer(i, j)}>
                                                    <Radio key={`radio-button_${i}${j}`} checked={!!value}/>
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                                {i === 0 && <div onClick={addColumn}>+</div>}
                            </Grid>
                        </>
                    )
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

export default connect<TableQuestionsProps, TableQuestionsProps, {}>(
    (state: any): TableQuestionsProps => ({
      table: state.tableState.table,
      columnsCount: state.tableState.tableInfo.columnsCount,
    }), 
    {
      addRow: addRow,
      addColumn: addCol,
      handleAnswer: handleAnswer,
    }
)(TableQuestions);