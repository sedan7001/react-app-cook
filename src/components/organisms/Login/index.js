import React from 'react'
import './index.css'
import Button from "../../atoms/Button";
import loginKey from 'assets/img/login_key.gif'
import styled from 'styled-components'
import PageNameBar from "../../molecules/PageNameBar";

const Wrapper = styled.div`
width:809px;
`;

const Login = () => {
    return (
        <Wrapper>
            <PageNameBar title={'로그인'}> </PageNameBar>

            <form method="post" action="login.php">


                <div className="loginForm">
                    <p className="loginMessage">회원님의 아이디와 비밀번호를 입력해 주세요.</p>
                    <div className="loginImageArea">
                        <img src={loginKey} alt="loginKey"/>
                    </div>
                    <div className="loginMainArea">
                        <div className="loginInputWithLabel">
                            <div className="loginLabel">
                                <ul>
                                    <li>
                                        아이디
                                    </li>
                                    <li>
                                        비밀번호
                                    </li>
                                </ul>
                            </div>
                            <div className="loginInput">
                                <ul>
                                    <li><input type="text" name="className" className="login_input"/></li>
                                    <li><input type="password" name="password" className="login_input"/></li>
                                </ul>
                            </div>
                            <div className="login_button">
                                <Button font-size="15px" width={"96px"} height={"54px"} theme={"dark"}>로그인</Button>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="loginLine"></div>
                        <div className="loginGotoJoin">
                            <span>▷아직 회원이 아니십니까?</span>
                            <Button width={"84px"} height={"23px"} font-weight={"300"}>회원가입하기</Button>

                        </div>

                    </div>
                </div>
            </form>


        </Wrapper>
    )
};

export default Login
