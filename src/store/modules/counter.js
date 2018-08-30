import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';
import {createAction, handleActions} from 'redux-actions';
// 카운터 관련 상태 로직
//액션 타입을 정의해 줍니다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

//액션 생성 함수를 만듭니다.
//이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내 준다.
// export const increment = () => ({type:INCREMENT});
// export const decrement = () => ({type:DECREMENT});


//redux-actions의 createAction 함수를 사용하면 액션 생성 함수 코드를 다음과 같이 작성.
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const decrementAsync = createAction(DECREMENT_ASYNC);

function* incrementAsyncSaga() {
    yield delay(1000);
    yield put(increment());
}

function* decrementAsyncSaga() {
    yield delay(1000);
    yield put(decrement());
}

//모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 1
};


export function* counterSaga() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
    yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

//리듀서를 만들어서 내보내 준다.
// export default function reducer(state = initialState, action) {
//     //리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환한다.
//     switch( action.type){
//         case INCREMENT:
//             return {number:state.number + 1 };
//         case DECREMENT:
//             return {number: state.number -1 };
//         default:
//             return state;
//             //아무일도 일어나지 않으면 현재 상태를 그대로 반환한다.
//     }
// }


//handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들 이뤄진 객체이고
//두번째 파라미터는 초기 상태이다.
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    //action 객체를 참조하지 않으니가 이렇게 생략할 수 있다.
    //state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시킨다.
    [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState);
