import React from 'react';
import Sidebar from "../../organisms/Sidebar";
import Footer from "../../organisms/Footer";
import PageTemplate from "../../templates/PageTemplates";
import {Route, Switch} from 'react-router-dom'
import Heading from "../../atoms/Heading";
import PostWrite from "../../organisms/PostWrite";
import HeaderContainer from "../../../containers/Base/HeaderContainer";
import PostListContainer from "../../../containers/Shared/Post/PostListContainer";
import PostViewContainer from "../../../containers/Shared/Post/PostViewContainer";

const PostListPage = ({match, ...props}) => {
   let pageName = match.url.split('/')[1];

    return (
        <PageTemplate header={<HeaderContainer/>} title={<Heading>{props[pageName]}</Heading>} sidebar={<Sidebar/>}
                      footer={<Footer/>}>
            <Switch>
                <Route path={`${match.url}/page/:page`} component={PostListContainer}/>
                <Route path={`${match.url}/write`} component={PostWrite}/>
                <Route path={`${match.url}/post/:num`} component={PostViewContainer}/>
                <Route path={`/about/post/:num`} component={PostViewContainer}/>


            </Switch>
        </PageTemplate>
    );
};

PostListPage.defaultProps = {
    free: "자유게시판",
    about: "소개",
    qna: "참여문의",
    memo: "낙서장",
    greet: "가입인사",
    download: "자료실",
    survey: "설문조사"
};

export default PostListPage;
