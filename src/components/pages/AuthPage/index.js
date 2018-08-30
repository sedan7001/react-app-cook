import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import Register from "../../organisms/Register";
import HeaderContainer from "../../../containers/Base/HeaderContainer";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import LoginContainer from "../../../containers/Auth/LoginContainer";

const AuthPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<HeaderContainer/>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}/login`} component={LoginContainer}/>
                <Route path={`${match.url}/register`} component={Register}/>
            </Switch>
        </PageTemplate>
    );
};

AuthPage.defaultProps = {
    name: "로그인"
};
// export default AuthPage;

export default connect(
    (state) => ({

    }),
    (dispatch)=>({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(AuthPage)
