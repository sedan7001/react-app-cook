import React from 'react'
import './index.css'
import loginKey from 'assets/img/login_key.gif'
import styled from 'styled-components'
import PageNameBar from "../../molecules/PageNameBar";
// import { Redirect } from 'react-router-dom';

const Wrapper = styled.div`
    width:809px;
    overflow: hidden;
    min-height: 475px;
`;
// const isLogin = false;

const Login = ({children}) => {
    return (
        <Wrapper>
            {/*{isLogin && <Redirect to="/"/>}*/}
            <PageNameBar title={'로그인'}> </PageNameBar>

            <form name="login" method="post" action="login.php">


                <div className="loginForm">
                    <p className="loginMessage">회원님의 아이디와 비밀번호를 입력해 주세요.</p>
                    <div className="loginImageArea">
                        <img src={loginKey} alt="loginKey"/>
                    </div>

                    <div className="loginMainArea">
                        {children}


                    </div>
                </div>
            </form>


        </Wrapper>
    )
};

export default Login
