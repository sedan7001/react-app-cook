// 모든 모듈들을 불러와서 합치는 작업이 이뤄짐

import {combineReducers} from 'redux';
import counter, {counterSaga} from './counter';
import post, {postSaga} from './post';
import todo from './todo';
import {all} from 'redux-saga/effects';

export function* rootSaga() {
    yield all([counterSaga(), postSaga()]);
}

export default combineReducers({
    counter,
    todo,
    post
});
