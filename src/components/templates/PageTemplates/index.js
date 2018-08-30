import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import contentBackground from 'assets/img/content_bg2.png'
const Wrapper = styled.div`
    display: table;
    width: 980px;
    height: 100%;
    margin:auto;
`;

const Header = styled.header`
    display: table-row;
    margin: auto;
`;
const Container = styled.article`
    display: table-row;
    height: 100%;

`;
const Sidebar = styled.section`
    margin-top: 80px;
    width: 160px;
    float: left;


`;
const Content = styled.section`
    ${props => props.left ? `
    overflow-y: auto;
    margin-top: 80px;
    margin-bottom:60px;
    float: left;
    padding-left: 5px;
    border-left: solid 1px #dddddd;
` :
    `
    height: 100%;
`}
`;

const Title = styled.div`
    color: #868587;
    height: 30px;
    padding-left: 5px;
    border-bottom: solid 1px #cccccc;
`;
const Footer = styled.footer`

    display: table-row;
    position: relative;
    margin:auto;
`;

const PageTemplate = ({header, title, sidebar, children, footer, ...props}) => {

    return (
        <Wrapper {...props}>
            <Header>{header}</Header>
            <Container>
                {sidebar && <Sidebar>{sidebar}</Sidebar>}

                <Content left={sidebar}>
                    {title && <Title>{title}</Title>}
                    {children}
                </Content>
            </Container>
            <Footer>{footer}</Footer>
        </Wrapper>
    )
};

PageTemplate.propTypes = {
    // title: PropTypes.string.isRequired,

    header: PropTypes.node.isRequired,
    sidebar: PropTypes.node,
    footer: PropTypes.node.isRequired,
    children: PropTypes.any.isRequired
};

export default PageTemplate
