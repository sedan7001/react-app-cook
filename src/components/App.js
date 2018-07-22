import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import FooterContainer from "containers/FooterContainer/FooterContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <HeaderContainer/>
                    <div className="contentWrapper">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            {/*<Route path="/posts" component={Posts}/>*/}
                            {/*<Route path="/login" component={Login}/>*/}
                            {/*<Route path="/me" component={MyPage}/>*/}
                            {/*<Route path="/search" component={Search}/>*/}
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>

                    <FooterContainer/>
                </div>
            </Router>
        );
    }
}

export default App;
