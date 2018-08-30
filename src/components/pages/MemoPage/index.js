import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route} from 'react-router-dom'
import Heading from "../../atoms/Heading";
import HeaderContainer from "../../../containers/Base/HeaderContainer";
import MemoContainer from "../../../containers/MemoContainer";

const MemoPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<HeaderContainer/>} title={<Heading level={1}>{props.name}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Route path={`${match.url}/page/:page`} component={MemoContainer}/>
        </PageTemplate>
    );
};

MemoPage.defaultProps = {
    name: "낙서장"
};
export default MemoPage;
