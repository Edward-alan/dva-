import {
  examtype,
  student,
  selectcond,
  addtestyi,
  LoginHome,
  identityAuthority,
  IDentity,
  appendId
} from "../services/questions";

const initState = {
  getQuestionsType: [],
  getstudent: [],
  getselectcond: [],
  getaddtestyi: [],
  getJurisdiction: [],
  getIDentity: [],
  getAppendId: [],

  getLoginHome: []
};
export default {
  namespace: "questions",
  state: initState,
  // state:
  effects: {
    *getQuestionsType(action, { call, put }) {
      const res = yield call(examtype);
      yield put({
        type: "changeState",
        payload: {
          getQuestionsType: res.data
        }
      });
      return res;
    },

    *getstudent(action, { call, put }) {
      const res = yield call(student);
      yield put({
        type: "changegetstudent",
        payload: {
          getstudent: res.data
        }
      });
      return res;
    },

    *getselectcond(action, { call, put }) {
      const res = yield call(selectcond, action.payload);
      yield put({
        type: "changeCtcond",
        payload: {
          getselectcond: res.data
        }
      });
      return res;
    },

    *getaddtestyi(action, { call, put }) {
      const res = yield call(addtestyi);
      yield put({
        type: "changeAddtestyi",
        payload: {
          getaddtestyi: res.data
        }
      });
      return res;
    },

    *getJurisdiction(action, { call, put }) {
      const res = yield call(identityAuthority);
      yield put({
        type: "changeJuris",
        payload: {
          getJurisdiction: res.data
        }
      });
      return res;
    },

    *getIDentity(action, { call, put }) {
      const res = yield call(IDentity, action.payload);
      yield put({
        type: "changeIDentity",
        payload: {
          getIDentity: res.data
        }
      });
      return res;
    },

    //添加身份
    *getAppendId(action, { call, put }) {
      const res = yield call(appendId, action.payload);
      yield put({
        type: "changeAppendId",
        payload: {
          getAppendId: res.data
        }
      });
      return res;
    },

    /**
     * POST
     */
    *getLoginHome(action, { call, put }) {
      const res = yield call(LoginHome);
      yield put({
        type: "changeLoginHome",
        payload: {
          getLoginHome: res.data
        }
      });
      return res;
    }
  },

  reducers: {
    changeState(state, action) {
      return { ...state, getQuestionsType: action.payload.getQuestionsType };
    },
    changegetstudent(state, action) {
      return { ...state, getstudent: action.payload.getstudent };
    },
    changeCtcond(state, action) {
      return { ...state, getselectcond: action.payload.getselectcond };
    },
    changeAddtestyi(state, action) {
      return { ...state, getaddtestyi: action.payload.getaddtestyi };
    },
    changeDelect(state, action) {
      return { ...state, getdelectTestyi: action.payload.getdelectTestyi };
    },
    changeJuris(state, action) {
      return { ...state, getJurisdiction: action.payload.getJurisdiction };
    },
    changeLoginHome(state, action) {
      return { ...state, getIDentity: action.payload.getIDentity };
    },
    changeAppendId(state, action) {
      return { ...state, getAppendId: action.payload.getAppendId };
    },

    //post
    changeLoginHome(state, action) {
      return { ...state, getLoginHome: action.payload.getLoginHome };
    }
  },
  subscriptions: {}
};
