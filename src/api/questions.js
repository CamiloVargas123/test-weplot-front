import { BASE_PATH, API_VERSION } from './config'

export function getQuestionApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-questions`

  return fetch(url).then(response => {
    return response.json();
  }).then(result => {
    if(result) return {ok: true, result};
    return {ok: false, message: result.message};
  }).catch(err => {
    return {ok: false, message: err.message};
  })
}