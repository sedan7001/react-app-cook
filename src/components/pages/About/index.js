import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import PostView from "../../organisms/PostView";
import PostList from "../../organisms/PostList";

const About = () => {
    return (
        <div className="aboutWrapper">

            <div className="content">
                <div className="col1">
                    <div className="leftMenu">
                        <div className="leftMenuTitle">
                            <span>메뉴</span>
                        </div>
                        <ul>
                            <li><NavLink to="/about" className="linkToPage"> ABOUT </NavLink></li>
                            <li><NavLink to="/greet" className="linkToPage"> 가입인사 </NavLink></li>
                            <li><NavLink to="/free" className="linkToPage"> 자유게시판 </NavLink></li>
                            <li><NavLink to="/download" className="linkToPage"> 자료실 </NavLink></li>
                            <li><NavLink to="/memo" className="linkToPage"> 낙서장 </NavLink></li>
                            <li><NavLink to="/qna" className="linkToPage"> 참여문의 </NavLink></li>
                            <li><NavLink to="/survey" className="linkToPage"> 설문조사 </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col2">

                    <PostView/>
                    <PostList/>

                </div>

            </div>
        </div>

    );
};
export default About;
