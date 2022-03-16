import { BASE_PATH, API_VERSION } from './config'

export function getQuestionApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-questions`

  return fetch(url).then(response => {
    return response.json();
  }).then(result => {
    if (result) return { ok: true, result };
    return { ok: false, message: result.message };
  }).catch(err => {
    return { ok: false, message: err.message };
  })
}

export function updateQuestionApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-questions`

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  return fetch(url, params).then(response => {
    return response.json();
  }).then(result => {
    return result.message;
  }).catch(err => {
    return err;
  })

}