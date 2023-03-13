import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataActionCreators from '../../store/actions';
import * as DataThunksCreators from '../../store/thunk';

export const ActionCreators = {
  ...DataActionCreators,
  ...DataThunksCreators
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
