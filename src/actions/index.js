export const FETCH_GITHUB = 'FETCH_GITHUB';

//Place API Key Information Here

export function fetchGithub() {
  //place API request here
  const request = 'hello';

  return {
    type: FETCH_GITHUB,
    payload: request
  };
}
