import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import './index.css'

const fontSize = ({level}) => `${0.75 + (1 * (1 / level))}rem`;

const styles = css`
    font-size: ${fontSize};
    letter-spacing: 0.1em;
    //font-size: 1.6em;
    font-weight: 700;
    margin: 0;
    //color: #7e7e80;
    //margin-top: 0.85714em;
    //margin-bottom: 0.57142em;
`;

const Heading = styled(({
                            level, children, ...props
                        }) => React.createElement(`h${level}`, props, children))`${styles}`;

Heading.propTypes = {
    level: PropTypes.number,
};

Heading.defaultProps = {
    level: 1
};

export default Heading
