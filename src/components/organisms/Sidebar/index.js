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
                <li><NavLink to="/about" className="linkToPage"> ABOUT </NavLink></li>
                <li><NavLink to="/greet" className="linkToPage"> 가입인사 </NavLink></li>
                <li><NavLink to="/memo" className="linkToPage"> 낙서장 </NavLink></li>
                <li><NavLink to="/free" className="linkToPage"> 자유게시판 </NavLink></li>
                <li><NavLink to="/download" className="linkToPage"> 자료실 </NavLink></li>
                <li><NavLink to="/qna" className="linkToPage"> 참여문의 </NavLink></li>
                <li><NavLink to="/survey" className="linkToPage"> 설문조사 </NavLink></li>
            </ul>
        </div>
    )
};

export default Sidebar
