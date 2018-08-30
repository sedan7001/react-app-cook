import React from 'react';
import Button from "../../atoms/Button";
import styled from 'styled-components';

const Wrapper = styled.div`
        margin-left: 125px;
        margin-top: 5px;

}
`;
const AuthButton = ({children, onClick}) => (
    <Wrapper>
        <Button onClick={onClick} font-size="15px" width={"154px"} height={"40px"} theme={"dark"}>
            {children}
        </Button>
    </Wrapper>
);

export default AuthButton;


