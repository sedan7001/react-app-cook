import React from 'react'
import {NavLink} from 'react-router-dom';
import './index.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarTitle">
                <span>메뉴</span>
            </div>
            <ul>
                <li><NavLink to="/about/post/6" className="linkToPage"> ABOUT </NavLink></li>
                <li><NavLink to="/greet/page/1" className="linkToPage"> 가입인사 </NavLink></li>
                <li><NavLink to="/memo/page/1" className="linkToPage"> 낙서장 </NavLink></li>
                <li><NavLink to="/free/page/1" className="linkToPage"> 자유게시판 </NavLink></li>
                <li><NavLink to="/download/page/1" className="linkToPage"> 자료실 </NavLink></li>
                <li><NavLink to="/qna/page/1" className="linkToPage"> 참여문의 </NavLink></li>
                <li><NavLink to="/survey" className="linkToPage"> 설문조사 </NavLink></li>
            </ul>
        </div>
    )
};

export default Sidebar
