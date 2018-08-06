import React from 'react';
import styled from 'styled-components';
import Button from "../../atoms/Button";


const LoginLine = styled.div`
    width: 382px;
    height: 1px;
    margin-top: 20px;
    border-bottom: solid 1px #dddddd;
`;
const LoginGotoJoin = styled.div`

    margin-top: 20px;
    margin-left: 60px;
`;
const JoinMsg = styled.span`
    margin-right: 20px;
    color: #aaaaaa;
    font-size: 13px;
`;
const JoinLink = ({to, children}) => (
    <div>
        <LoginLine/>
        <LoginGotoJoin>
            <JoinMsg>▷아직 회원이 아니십니까?</JoinMsg>
            <Button to={to} width={"84px"} height={"23px"} fontWeight={"300"}>{children}</Button>
        </LoginGotoJoin>
    </div>
);

export default JoinLink;


