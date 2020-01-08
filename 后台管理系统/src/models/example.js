const initstate = {
  todos: [
    {
      title: "问答题",
      status:'774318-730z8m',
      key:0
    },
    {
      title: "代码阅读题",
      status: 'br9d6s-wh46i',
      key:1
    },
    {
      title: "代码补全",
      status: 'fwf0t-wla1q',
      key:2
    },{
      title: "修改bug",
      status: 'n66k4n-i9zpen',
      key:3
    },{
      title: "手写代码",
      status: 'v8i73-r8oai',
      key:4
    }
  ]
};

export default {
  namespace: "example", //命名空间
  state: initstate, //state 状态

  subscriptions: {   //获取数据的方法,它来自于 elm
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {     //异步操作,从底层引入 redux-sagas 做异步流程控制
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    }
  },

  reducers: {    //传来的新值  新的state
    save(state, action) {
      return { ...state, ...action.payload };
    },



    //状态改变,同步方式
    changeTodo(state, action) {
      const todos = state.todos;
      todos.push(action.todo);
      return Object.assign({}, state, {
        todos: todos
      });
    }
  }
};
