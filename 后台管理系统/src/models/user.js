export default {
  namespace: "user", //命名空间
  state: initstate, //state 状态

  effects: {
    //执行登录
    *login(action, { put, call }) {
      const res = yield call(login, action.payload);
      yield put({
        type: "changeState",
        payload: {
          token: res.token
        }
      });
      window.localStorage.setItem("token,res.token");
      yield put({ type: "fetchUserInfo" });
    }
  },

  //获取用户信息
  *fetchUserInfo(action, { put, call }) {
    const res = yield call(fetchUserInfo);
    yield put({
      type: "changeState",
      payload: {
        info: res.data
      }
    });
  },

  reducers: {
    changeState(state, action) {
      return Object.assign({}, state, action.payload);
    }
  }
};
