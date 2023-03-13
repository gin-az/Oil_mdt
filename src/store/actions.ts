
import { IDataActionTypes, SetDataAction } from './reducer';
import { IDataToDay } from '../components/OilTable';

export const data__setData = (data: Array<IDataToDay>): SetDataAction => ({
  type: IDataActionTypes.DATA__SET_DATA,
  payload: data
});
