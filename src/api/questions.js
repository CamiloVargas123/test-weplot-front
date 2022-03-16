import { BASE_PATH, API_VERSION } from './config'

export function getQuestionApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-questions`

  return fetch(url).then(response => {
    return response.json();
  }).then(result => {
    return result;
  }).catch(err => {
    return err.message;
  })
}