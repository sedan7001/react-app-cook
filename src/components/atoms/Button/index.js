import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import Link from 'react-router-dom/Link'
import {prop, ifProp} from 'styled-tools'


const styles = css`
    width: ${prop('width', '51px')};
    height: ${prop('height', '25px')};
    background-color: ${prop('background-color', '#a1a1a1')};
    color: ${prop('color', '#fff')};
    border-radius: 3px;
    margin-right: 5px;
    font-weight : ${prop('fontWeight', '500')};
    font-size: ${prop('font-size', '12px')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor:  pointer;
    transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
    &:focus {
      outline: none
    };
    ${ifProp('blueBtn', css`
    width: ${prop('width', '99px')};
    height: ${prop('height', '50px')};
    color: white;
    border-radius: 6px;
    text-align: center;
    transition: top .01s linear;
    text-shadow: 0 1px 0 rgba(0,0,0,0.15);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor:  pointer;
    background-color: #6DA2D9;
    box-shadow: 0 0 0 1px #6698cb inset,
        0 0 0 2px rgba(255,255,255,0.15) inset,
        0 3px 0 0 rgba(110, 164, 219, .7),
        0 3px 0 1px rgba(0,0,0,.4),
        0 3px 3px 1px rgba(0,0,0,0.5);
    &:hover {background-color: #699DD1;};
    &:active {
        top: 9px;
        box-shadow: 0 0 0 1px #6191C2 inset,
        0 0 0 2px rgba(255,255,255,0.15) inset,
        0 0 0 1px rgba(0,0,0,0.4);
    };  
    `)}
`;


const StyledLink = styled(({
                               onclick, disabled, transparent, reverse, palette, width, height, theme, ...props
                           }) => <Link onClick={onclick} {...props} />)`${styles}`;


const Anchor = styled.a`${styles}`;
const StyledButton = styled.button`${styles}`;

const Button = ({onclick, type, ...props}) => {
    if (props.to) {
        return <StyledLink onClick={onclick} {...props} />
    } else if (props.href) {
        return <Anchor onClick={onclick} {...props} />
    }
    return <StyledButton onClick={onclick} {...props} type={type}/>
};

Button.propTypes = {
    disabled: PropTypes.bool,
    palette: PropTypes.string,
    transparent: PropTypes.bool,
    reverse: PropTypes.bool,
    type: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    theme: 'grey'
};

export default Button
