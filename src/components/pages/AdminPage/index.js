import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import Heading from "../../atoms/Heading";
import Login from "../../organisms/Login";
import Register from "../../organisms/Register";
import AdminDashboard from "../../organisms/AdminDashboard";

const AdminPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}`} component={AdminDashboard}/>
            </Switch>
        </PageTemplate>
    );
};

AdminPage.defaultProps = {
    name: "로그인"
};
export default AdminPage;
