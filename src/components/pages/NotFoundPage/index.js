import React from 'react';
import "./index.css";
import PageTemplate from "../../templates/PageTemplates";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
const NotFoundPage = () => {
    return (
        <PageTemplate header={<Header/>} footer={<Footer/>}>

            <div className="notFound">
            <h1>404 페이지를 찾을 수 없습니다.</h1>
        </div>
        </PageTemplate>
    );
};

export default NotFoundPage;
