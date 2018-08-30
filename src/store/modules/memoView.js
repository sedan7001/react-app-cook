import { createAction, handleActions } from 'redux-actions';

import {Map, fromJS, List} from 'immutable';
import * as MemoAPI from 'lib/api/memo';
import { pender } from 'redux-pender';

const LOAD_MEMO_VIEW = 'memo/LOAD_Memo_VIEW'; // 포스트 리스트 초기 로딩

export const loadMemoView = createAction(LOAD_MEMO_VIEW, MemoAPI.memoView);


const initialState = Map({
    data: Map({
        page: null,
        links: Map({
            page_list: List()
        }),
        list: List()
    }),
});

export default handleActions({
    ...pender({
        type: LOAD_MEMO_VIEW,
        onSuccess: (state, action) => {
            const { data } = action.payload.data;
            return state.set('data', fromJS(data));
        }
    })
}, initialState);
