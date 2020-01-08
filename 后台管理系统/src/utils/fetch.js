/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-01-08 19:25:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-01-08 19:25:54
 * 封装localStorage 本地存储
 */
const CREDS = "include";
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = Promise.reject(response.statusText);
  error.response = response;
  throw error;
}
const asyncFetch = async function(obj) {
  const url = obj.url || obj;
  const method = obj.method || "GET";
  const credentials = obj.credentials || CREDS;
  const body = obj.body || null;
  const authentication = localStorage.getItem("token") || null;
  let confFetch = {
    method,
    credentials,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: authentication
    }
  };
  if (method === "POST") {
    confFetch = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: authentication
      },
      method,
      credentials,
      body: JSON.stringify(body)
    };
  }
  return new Promise(function(resolve, reject) {
    fetch(url, confFetch)
      .then(checkStatus)
      .then(res => res.json())
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default asyncFetch;
