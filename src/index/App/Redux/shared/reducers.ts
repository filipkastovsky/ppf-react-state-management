import { combineReducers } from 'redux';
import { noteReducer } from '../ReduxImpl/List/reducers/noteReducer';

export const rootReducer = combineReducers({ noteReducer });
export type RootStateType = ReturnType<typeof rootReducer>;
