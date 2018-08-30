import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
float: right;
`;
const BorderedButton = styled(Link)`



`;

const LoginButton = () => (
    <Wrapper>
        <BorderedButton to="/auth/login">
            / 로그인 /
        </BorderedButton>
        <BorderedButton to="/auth/register">
           회원가입
        </BorderedButton>
    </Wrapper>
);

export default LoginButton;
