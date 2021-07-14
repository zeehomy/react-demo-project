/*
 * @Date: 2021-07-14 16:01:09
 * @LastEditTime: 2021-07-14 18:40:18
 * @Description: 
 * @FilePath: /demo-project/src/store/sagas.js
 */
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { GET_TODOS_DATA } from './actions';
import { 
  getInitTodosAction
} from './actionCreators';
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getTodosData(action) {
  try {
    // call https://blog.csdn.net/liwusen/article/details/80980987
    // https://redux-saga-in-chinese.js.org/docs/api/index.html#callfn-args
    const res = yield call(() => {
      return axios.get('http://localhost:3100/posts');
    });
    yield put(getInitTodosAction(res.data));
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    console.log('error', e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(GET_TODOS_DATA, getTodosData);
}

export default mySaga;