import React from 'react';
import styled from 'styled-components'
import './index.css'
import Button from "../../atoms/Button";
import PageNameBar from "../../molecules/PageNameBar";

const StyledButton = styled(Button)`
    width: 62px;
    height: 23px;
    

`;
const Wrapper = styled.div`
    width:809px;
    font-size: 12px;
`;
const Register = () => {
    return (
        <Wrapper>
            <PageNameBar title={'회원가입'}> </PageNameBar>

            <form name="member_form" method="post" action="insert.php">

                <div className="registerForm">
                    <div className="registerLabel">
                        <ul>
                            <li>* 아이디</li>
                            <li>* 비밀번호</li>
                            <li>* 비밀번호 확인</li>
                            <li>* 이름</li>
                            <li>* 닉네임</li>
                            <li>* 휴대폰</li>
                            <li>&nbsp;&nbsp;이메일</li>
                        </ul>
                    </div>
                    <div className="registerInputArea">
                        <ul>
                            <li>
                                <div className="registerId"><input type="text" name="id"/></div>
                                <div className="registerCheck">
                                    <StyledButton>중복확인</StyledButton>
                                </div>
                                <div className="registerExplanation">4~12자의 영문 소문자, 숫자와 특수기호(_) 만 사용할 수 있습니다.</div>
                            </li>
                            <li><input type="password" name="password"/></li>
                            <li><input type="password" name="passwordConfirm"/></li>
                            <li><input type="text" name="name"/></li>
                            <li>
                                <div className="registerNick"><input type="text" name="nick"/></div>
                                <div className="registerNickCheck">
                                    <StyledButton>중복확인</StyledButton>
                                </div>
                            </li>
                            <li>
                                <select name="hp1">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select> -
                                <input type="text" className="hp" name="hp2"/> -
                                <input type="text" className="hp" name="hp3"/>
                            </li>
                            <li>
                                <input type="text" className="email" name="email"/>
                                {/*<input type="text" name="email2"/>*/}
                            </li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                    <div className="registerMust"> * 는 필수 입력항목입니다.^^</div>
                </div>

                <div className="registerSubmitBtn">
                    <StyledButton>저장하기</StyledButton>
                    <StyledButton>취소하기</StyledButton>
                </div>
            </form>
        </Wrapper>
    );
};

export default Register;
