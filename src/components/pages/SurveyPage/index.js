import React from 'react'
import PageTemplate from "../../templates/PageTemplates";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import SurveyForm from "../../organisms/SurveyForm";
import Sidebar from "../../organisms/Sidebar";
import Heading from "../../atoms/Heading";
import {Route} from 'react-router-dom'
import SurveyResult from "../../organisms/SurveyResult";

const SurveyPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>} title={<Heading>{props.name}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Route exact path={match.url} component={SurveyForm}/>
            <Route path={`${match.url}/:id`} component={SurveyResult}/>
        </PageTemplate>
    );
};

SurveyPage.defaultProps = {
    name: "설문조사"
};
export default SurveyPage;
