import React from 'react';
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import AdminDashboard from "../../organisms/AdminDashboard";
import AdminMemberList from "../../organisms/AdminMemberList";
import AdminServerInfo from "../../organisms/AdminServerInfo";
import AdminSurveyRegist from "../../organisms/AdminSurveyRegist";

const AdminPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}/dashboard`} component={AdminDashboard}/>
                <Route path={`${match.url}/memberList`} component={AdminMemberList}/>
                <Route path={`${match.url}/serverInfo`} component={AdminServerInfo}/>
                <Route path={`${match.url}/surveyRegist`} component={AdminSurveyRegist}/>

            </Switch>
        </PageTemplate>
    );
};

AdminPage.defaultProps = {
    name: "로그인"
};
export default AdminPage;
