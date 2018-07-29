import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import GreetPage from "./pages/GreetPage";
import FreePage from "./pages/FreePage";
import DownloadPage from "./pages/DownloadPage";
import QnaPage from "./pages/QnaPage";
import MemoPage from "./pages/MemoPage";
import SurveyPage from "./pages/SurveyPage";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/greet" component={GreetPage}/>
                        <Route path="/memo" component={MemoPage}/>
                        <Route path="/free" component={FreePage}/>
                        <Route path="/download" component={DownloadPage}/>
                        <Route path="/survey" component={SurveyPage}/>
                        <Route path="/qna" component={QnaPage}/>
                        <Route path="/auth" component={AuthPage}/>
                        <Route path="/admin" component={AdminPage}/>


                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
