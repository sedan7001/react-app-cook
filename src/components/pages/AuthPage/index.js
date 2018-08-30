import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import Login from "../../organisms/Login";
import Register from "../../organisms/Register";

const AuthPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}/login`} component={Login}/>
                <Route path={`${match.url}/register`} component={Register}/>
            </Switch>
        </PageTemplate>
    );
};

AuthPage.defaultProps = {
    name: "로그인"
};
export default AuthPage;
