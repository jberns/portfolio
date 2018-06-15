import axios from 'axios';

export const FETCH_GITHUB = 'FETCH_GITHUB';

//Place API Key Information Here

export function fetchGithub() {
  const request = axios.get('https://api.github.com/users/jberns/repos');

  return {
    type: FETCH_GITHUB,
    payload: request
  };
}
