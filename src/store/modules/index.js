import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';
import user from './user';
import home from './home';
import posts from './posts';
import postView from './postView';
import userPage from './userPage';
import surveyView from "./surveyView";
import memoView from "./memoView";


import { penderReducer } from 'redux-pender';

export default combineReducers({
    base,
    auth,
    user,
    home,
    posts,
    postView,
    userPage,
    surveyView,
    memoView,
    pender: penderReducer
});
