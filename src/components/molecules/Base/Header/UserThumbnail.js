import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
float: right;
`;
const UserThumbnail = ({thumbnail, onClick}) => (

    <Wrapper>
        <span >
            {thumbnail}
        </span>
        <a onClick={onClick}>
            / 로그아웃
        </a>
    </Wrapper>
);
export default UserThumbnail;
