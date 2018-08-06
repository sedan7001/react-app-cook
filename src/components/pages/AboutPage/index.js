import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import HeaderContainer from "../../../containers/Base/HeaderContainer";
import PostViewContainer from "../../../containers/Shared/Post/PostViewContainer";
import Heading from "../../atoms/Heading";

const AboutPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<HeaderContainer/>}
                      title={<Heading>{props.name}</Heading>}
                      sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}/post/:num`} component={PostViewContainer}/>
            </Switch>
        </PageTemplate>
    );
};

AboutPage.defaultProps = {
    name: "소개"
};
export default AboutPage;
