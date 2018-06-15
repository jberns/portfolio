import { combineReducers } from 'redux';
import GithubReducer from './github_reducer';

const rootReducer = combineReducers({
  github: GithubReducer
});

export default rootReducer;
