import React from 'react';
import './InputWithLabel.css'

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣음.
const InputWithLabel = ({label, ...rest}) => (
    <div className="loginInputWithLabel">
        <div className="loginLabel">
            <div className="labelText">{label}</div>
            <input className="loginInput" {...rest}/>
        </div>
    </div>
);

export default InputWithLabel;


