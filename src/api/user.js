import {BASE_PATH, API_VERSION} from './config'

export function signUpApi(data){
  const url = `${BASE_PATH}/${API_VERSION}/sign-up`
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }
  
  return fetch(url, params).then(response => response.json()).then(result => {
    if(result.user) return {ok: true, message: result.message}
    return {ok: false, message: result.message}
  }).catch(err => {
    return {ok: false, message: err.message}
  })
}