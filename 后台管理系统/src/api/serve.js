import Axios from "@/utils/headertoken";

// //登录
// export function logins(user_name, user_pwd) {
//   const url = "/api/user/login";
//   Axios.post(url, { user_name, user_pwd }).then(res=>{
//       console.log( res.msg)
//     if (res.code === 1) {
//       window.localStorage.setItem('token', res.token)
//       console.log(12313)
//     }
//   })
// }


export function getList() {
  const url = "/api/manger/grade";
  Axios.get(url);
}

export function classify(text, sort) {
  const url = "/api/exam/insertQuestionsType";
  Axios.get(url, {
    text,
    sort
  });
}
