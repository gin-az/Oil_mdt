import { data__setData } from './actions';
import { GetState } from './index';

export const data__getData = () => async (dispatch: any, getState: GetState) => {
  try {
    fetch('api/oil')
      .then((res) => res.json())
      .then((data) => dispatch(data__setData(data)))
      .catch((e) => alert('Ошибка при запросе'));
  } catch (e) {
    console.error('Ошибка при запросе...', e);
  }
};

export const app__initApp = () => (dispatch: any, getState: GetState) => {
  dispatch(data__getData());
};
