import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import Link from 'react-router-dom/Link'
import {prop, switchProp} from 'styled-tools'


const styles = css`
  width: ${prop('width', '51px')};
  height: ${prop('height', '25px')};
  background-color: ${switchProp('theme', {
    grey: '#a1a1a1',
    dark: '#555555'
})};
  color: ${prop('color', '#fff')};
  border-radius: 3px;
  margin-right: 5px;
  font-weight : ${prop('font-weight', '500')};
  font-size: ${prop('font-size', 'inherit')};

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
  }
`;

const StyledLink = styled(({
                               disabled, transparent, reverse, palette, height, theme, ...props
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
    // width: PropTypes.string,
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
