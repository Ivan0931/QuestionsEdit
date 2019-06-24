import { Store, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import {ITableQuestionsStateProps} from '../Components/TableQuestions';
import { rootReducer } from './reducers/rootReducer';

export interface IAppState {
    tableState: ITableQuestionsStateProps;
}

export const store: Store = createStore(rootReducer, applyMiddleware(logger));
