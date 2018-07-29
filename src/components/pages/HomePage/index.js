import React from 'react';
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import FeatureList from "../../organisms/FeatureList";
import PageTemplate from "../../templates/PageTemplates";

const HomePage = () => {
    return (

        <PageTemplate header={<Header/>} footer={<Footer/>}>
            <FeatureList/>
        </PageTemplate>

    );
};

export default HomePage;
