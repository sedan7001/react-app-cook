import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import FooterContainer from "./containers/FooterContainer/FooterContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./routes/Home/Home";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <HeaderContainer/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/*<Route path="/about/:username" component={About}/>*/}
                        {/*<Route path="/posts" component={Posts}/>*/}
                        {/*<Route path="/login" component={Login}/>*/}
                        {/*<Route path="/me" component={MyPage}/>*/}
                        {/*<Route path="/search" component={Search}/>*/}
                        {/*<Route component={NoMatch}/>*/}
                    </Switch>

                    <FooterContainer/>
                </div>
            </Router>
        );
    }
}

export default App;
