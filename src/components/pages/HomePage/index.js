import React from 'react';
import Footer from "../../organisms/Footer";
import FeatureList from "../../organisms/FeatureList";
import PageTemplate from "../../templates/PageTemplates";
import HeaderContainer from "../../../containers/Base/HeaderContainer";

const HomePage = () => {
    return (

        <PageTemplate header={<HeaderContainer/>} footer={<Footer/>}>
            <FeatureList/>
        </PageTemplate>

    );
};

export default HomePage;
