import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route} from 'react-router-dom'
import Heading from "../../atoms/Heading";
import MemoList from "../../organisms/MemoList";

const MemoPage = ({match, ...props}) => {
    return (
        <PageTemplate header={<Header/>} title={<Heading level={1}>{props.name}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Route exact path={match.url} component={MemoList}/>
        </PageTemplate>
    );
};

MemoPage.defaultProps = {
    name: "가입인사"
};
export default MemoPage;
