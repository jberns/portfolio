import { FETCH_GITHUB } from '../actions/index';

export default function githubApp(state = [], action) {
  switch (action.type) {
    case FETCH_GITHUB:
      return Object.assign({}, state, {
        github_project: action.payload
      });
    default:
      return state;
  }
}
