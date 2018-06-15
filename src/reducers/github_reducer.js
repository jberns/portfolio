import _ from 'lodash';
import { FETCH_GITHUB } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GITHUB:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
