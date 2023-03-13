import { IDataToDay } from '../components/OilTable';
import { combineReducers } from 'redux';

export enum IDataActionTypes {
  DATA__SET_DATA = '[DATA] SET_DATA'
}

export interface SetDataAction {
  type: IDataActionTypes.DATA__SET_DATA;
  payload: Array<IDataToDay>;
}

const initialState = {
  data: null as Array<IDataToDay> | null
};

type IDataState = typeof initialState;

export const dataReducer = (state = initialState, action: SetDataAction): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  data: dataReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
