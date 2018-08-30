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
  font-weight : ${prop('font-weight', '500')};
  font-size: ${prop('font-size', '12px')};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor:  pointer;

  // white-space: nowrap;
  // border: 0.0625em solid ;
  // text-decoration: none;
  // appearance: none;
  // padding: 0 1em;
  // box-sizing: border-box;
  
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  &:focus {
    outline: none
  };
  
  
    // width: 60px;
    // height: 24px;
    
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
                               disabled, transparent, reverse, palette, width, height, theme, ...props
                           }) => <Link {...props} />)`${styles}`;


const Anchor = styled.a`${styles}`;
const StyledButton = styled.button`${styles}`;

const Button = ({type, ...props}) => {
    if (props.to) {
        return <StyledLink {...props} />
    } else if (props.href) {
        return <Anchor {...props} />
    }
    return <StyledButton {...props} type={type}/>
};

Button.propTypes = {
    // width: PropTypes.number,
    disabled: PropTypes.bool,
    palette: PropTypes.string,
    transparent: PropTypes.bool,
    reverse: PropTypes.bool,
    // height: PropTypes.number,
    type: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    theme: 'grey'

};

export default Button
