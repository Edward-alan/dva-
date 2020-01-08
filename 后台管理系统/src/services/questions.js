import fetch from "../utils/fetch.js";

export const examtype = () => fetch({ url: "/manger/grade", method: "GET" });

export const student = () =>
  fetch({
    url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
    method: "GET"
  });

export const selectcond = (data) =>
  fetch({ url: "/api/exam/questions/condition", method: "GET" ,body:data});

export const addtestyi = () => fetch({ url: "/exam/examType", method: "GET" });

export const identityAuthority = () =>
  fetch({ url: "/api/user/identity", method: "GET" });

  export const IDentity = (data) => {
    if (data) {
        let url = '/api/user/getAuthInfo/getViewFromIdentity';
        let paramsArray = [];
        Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
        return fetch({ url: url, method: 'GET' });
    } else {
        return fetch({ url: '/api/user/getAuthInfo/getViewFromIdentity', method: 'GET' });
    }
}

  export const appendId = (data) => {
    if (data) {
        let url = '/api/user/identity/edit';
        let paramsArray = [];
        Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
        return fetch({ url: url, method: 'GET' });
    } else {
        return fetch({ url: '/api/user/identity/edit', method: 'GET' });
    }
}
  

export const LoginHome = () => fetch({ url: "/user/login", method: "POST" });
