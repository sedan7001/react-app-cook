import {createAction, handleActions} from 'redux-actions';
import {Record, List} from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

//우리가 이번에 만든 액션함수들은 참조해야 할 값들이 필요하다.
//예를 들어 changeInput 은 다음 어떤 값으로 바뀌어야 할 지를 알려주는 값이 필요하고
//insert 는 추가 할 내용, 그리고 toggle 과 remove 는 어떤 id를 수정해야 할 지 알려주어야 한다.
//createAction 을 통하여 만든 액션생성함수에 파라미터를 넣어서 호출하면 자동으로 payload 라는 이름으로 통일되어 설정된다.
//createAction('새로운 값');
// { type: 'todo/CHANGE_INPUT', payload: '새로운 값'}
// createAction 함수는 세가지의 파라미터를 받는데요, 첫번째는 액션이름, 두번째는 payloadCreator, 세번째는 metaCreator 입니다.
//     두번째와 세번째 파라미터는 payload 값과 meta 값을 지정해주는 함수인데요, 다음 코드를 보면 이해하기 쉽습니다.
//
//     예제:
//
// const sample = createAction('SAMPLE', (value) => value + 1, (value) => value - 1);
// sample(1);
// // { type: 'SAMPLE', payload: 2, meta: 0 }

let id = 0; // todo 아이템에 들어갈 고유 값 입니다
// Record 함수는 Record 형태 데이터를 만드는 함수를 반환합니다.
// 따라서, 만든 다음에 뒤에 () 를 붙여줘야 데이터가 생성됩니다.
const initialState = Record({
    input: '',
    todos: List()
})();

// Todo 아이템의 형식을 정합니다.
const TodoRecord = Record({
    id: id++,
    text: '',
    checked: false
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, {payload: text}) => {
        // TodoRecord 를 사용해야 아이템도 Record 형식으로 조회 가능합니다.
        // 빠져있는 값은, 기본값을 사용하게 됩니다 (checked: false)
        const item = TodoRecord({id: id++, text});
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);
