import React from 'react';
import './index.css';
import logo from 'assets/img/logo.png';
import moto from 'assets/img/moto.png';
import {NavLink} from 'react-router-dom';

const Header = ({children}) => {
    return (
        <div className="headerWrapper">
            <div className="header">
                <div className="links">
                    <NavLink className="logo" to="/home"><img src={logo} border="0" alt="기본"/></NavLink>
                    <NavLink className="moto" to="/home"> <img src={moto} border="0" alt="moto"/></NavLink>
                    <div className="top_login">
                        <NavLink to='/admin/dashboard'>관리자페이지</NavLink>
                        {children}
                        {/*<NavLink to='/auth/login'>로그인 | </NavLink>*/}
                        {/*<NavLink to='/auth/register'>회원가입</NavLink>*/}
                    </div>
                </div>
                <div className="navigation">
                    <NavLink to="/about/post/6" className="linkToPage"> ABOUT </NavLink>
                    <NavLink to="/greet/page/1" className="linkToPage"> 가입인사 </NavLink>
                    <NavLink to="/memo/page/1" className="linkToPage"> 낙서장 </NavLink>
                    <NavLink to="/free/page/1" className="linkToPage"> 자유게시판 </NavLink>
                    <NavLink to="/download/page/1" className="linkToPage"> 자료실 </NavLink>
                    <NavLink to="/qna/page/1" className="linkToPage"> 참여문의 </NavLink>
                    <NavLink to="/survey" className="linkToPage"> 설문조사 </NavLink>
                </div>
            </div>
            <div className="headerBox"></div>

        </div>
    );
};

export default Header;
