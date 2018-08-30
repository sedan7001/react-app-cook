import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from "../../atoms/Heading";

const Wrapper = styled.div`
color: #868587;
height: 30px;
padding-left: 5px;
border-bottom: solid 1px #cccccc;

`;
const PageNameBar = ({title, ...props}) => {
    return (

        <Wrapper {...props}>
            <Heading>{title}</Heading>
        </Wrapper>
    )

};

PageNameBar.propTypes = {
    title: PropTypes.string
};
export default PageNameBar
