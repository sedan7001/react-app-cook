import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PostListPage from "./pages/PostListPage";
import MemoPage from "./pages/MemoPage";
import SurveyPage from "./pages/SurveyPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
import storage from "lib/storage";
import { connect } from 'react-redux';
import * as userActions from 'store/modules/user';
import {bindActionCreators} from 'redux';

class App extends Component {



    initializeUserInfo = async () => {
        const loggedInfo = storage.get('loggedInfo');
        if(!loggedInfo) return;

        const { UserActions } = this.props;
        UserActions.setLoggedInfo(loggedInfo);
        try {
            await UserActions.checkStatus();
        } catch (e) {
            storage.remove('loggedInfo');
            window.location.href = '/auth/login?expired';
        }
    };

    componentDidMount() {
        this.initializeUserInfo();
    }



    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/about" component={PostListPage}/>
                        <Route path="/memo" component={MemoPage}/>
                        <Route path="/survey" component={SurveyPage}/>
                        <Route path="/greet" component={PostListPage}/>
                        <Route path="/free" component={PostListPage}/>
                        <Route path="/download" component={PostListPage}/>
                        <Route path="/qna" component={PostListPage}/>
                        <Route path="/auth" component={AuthPage}/>
                        <Route path="/admin" component={AdminPage}/>


                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);

