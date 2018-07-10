import React from 'react';
import './Header.css';
import logo from 'img/logo.png';
import moto from 'img/moto.png';

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="header">
                <div className="links">
                    <a className="logo" href="index.php"><img src={logo} border="0" alt="기본"/></a>
                    <a className="moto"> <img src={moto} border="0" alt="moto"/></a>
                    <div className="top_login">
                        <a href='/admin/admin.php'>관리자페이지 | </a>
                        <a href='/login/login_form.php'>로그인 | </a>
                        <a href='/member/member_form.php'>회원가입</a>
                    </div>
                </div>
                <div className="navigation">
                    <a href="/about/view.php"> ABOUT </a>
                    <a href="/greet/list.php"> 가입인사 </a>
                    <a href="/free/list.php"> 자유게시판 </a>
                    <a href="/download/list.php"> 자료실 </a>
                    <a href="/memo/memo.php"> 낙서장 </a>
                    <a href="/qna/list.php"> 참여문의 </a>
                    <a href="/survey/survey.php"> 설문조사 </a>
                </div>
            </div>
        </div>
    );
};

export default Header;