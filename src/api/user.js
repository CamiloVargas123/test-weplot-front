import { BASE_PATH, API_VERSION } from './config'

export function signUpApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-up`
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch(url, params).then(response => response.json()).then(result => {
    if (result.user) return { ok: true, message: result.message }
    return { ok: false, message: result.message }
  }).catch(err => {
    return { ok: false, message: err.message }
  })
}

export function signInApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch(url, params).then(response => {
    return response.json();
  }).then(result => {
    return result;
  }).catch(e => {
    return e.message;
  })
}

export function getAllUsers(){
  const url = `${BASE_PATH}/${API_VERSION}/users`;

  return fetch(url).then(response => {
      return response.json();
  }).then(result => {
      return result;
  }).catch(err => {
      return err.message;
  })
}