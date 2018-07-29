import React from 'react';
import PostView from "../../organisms/PostView";
import PostList from "../../organisms/PostList";
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import Heading from "../../atoms/Heading";
import PostWrite from "../../organisms/PostWrite";


const DownloadPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>} title={<Heading>{props.name}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
                <Route exact path={match.url} component={PostList}/>
                <Route path={`${match.url}/write`} component={PostWrite}/>
                <Route path={`${match.url}/:id`} component={PostView}/>
            </Switch>
        </PageTemplate>
    );
};

DownloadPage.defaultProps = {
    name: "자료실"
};
export default DownloadPage;
