import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import * as SurveyAPI from 'lib/api/survey';
import { pender } from 'redux-pender';

const LOAD_SURVEY_VIEW = 'survey/LOAD_SURVEY_VIEW'; // 포스트 리스트 초기 로딩

export const loadSurveyView = createAction(LOAD_SURVEY_VIEW, SurveyAPI.surveyView);


const initialState = Map({
    data: Map()
});

export default handleActions({
    ...pender({
        type: LOAD_SURVEY_VIEW,
        onSuccess: (state, action) => {
            const { data } = action.payload.data;
            return state.set('data', fromJS(data));
        }
    })
}, initialState);
