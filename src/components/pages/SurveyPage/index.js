import React from 'react'
import PageTemplate from "../../templates/PageTemplates";
import Footer from "../../organisms/Footer";
// import SurveyForm from "../../organisms/SurveyForm";
import Sidebar from "../../organisms/Sidebar";
import Heading from "../../atoms/Heading";
import {Route ,Switch} from 'react-router-dom'
import HeaderContainer from "../../../containers/Base/HeaderContainer";
import SurveyContainer from "../../../containers/SurveyContainer";

const SurveyPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<HeaderContainer/>} title={<Heading>{props.name}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
            <Route exact path={match.url} component={SurveyContainer}/>
            <Route path={`${match.url}/result`} component={SurveyContainer}/>
            </Switch>
        </PageTemplate>
    );
};

SurveyPage.defaultProps = {
    name: "설문조사"
};
export default SurveyPage;
