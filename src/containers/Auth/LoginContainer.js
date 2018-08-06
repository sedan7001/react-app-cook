import React, {Component} from 'react';
// import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from 'store/modules/auth';
import * as userActions from 'store/modules/user';
import storage from 'lib/storage';
import queryString from 'query-string';
// import LoginContainer from "../../components/organisms/LoginContainer";
import AuthContent from "../../components/molecules/Auth/AuthContent";
import InputWithLabel from "../../components/molecules/Auth/InputWithLabel";
import AuthButton from "../../components/molecules/Auth/AuthButton";
import JoinLink from "../../components/molecules/Auth/JoinLink";
import AuthError from "../../components/molecules/Auth/AuthError";
import Login from "../../components/organisms/Login";

class LoginContainer extends Component {

    componentDidMount() {
        const {location} = this.props;
        const query = queryString.parse(location.search);

        if (query.expired !== undefined) {
            this.setError('세션에 만료되었습니다. 다시 로그인하세요.')
        }
    }

    handleChange = (e) => {
        const {AuthActions} = this.props;
        const {name, value} = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    };

    componentWillUnmount() {
        const {AuthActions} = this.props;
        AuthActions.initializeForm('login')
    }

    setError = (message) => {
        const {AuthActions} = this.props;
        AuthActions.setError({
            form: 'login',
            message
        });
        return false;
    };


    handleLocalLogin = async () => {
        const {form, AuthActions, UserActions, history} = this.props;
        const {id, password} = form.toJS();

        try {
            await AuthActions.localLogin({id, password});
            const loggedInfo = this.props.result.toJS();
            console.log(loggedInfo);

            UserActions.setLoggedInfo(loggedInfo);
            history.push('/');
            storage.set('loggedInfo', loggedInfo);

        } catch (e) {
            console.log('a');
            this.setError('잘못된 계정정보입니다.');
        }
    };

    render() {
        const {id, password} = this.props.form.toJS(); // form 에서 id 과 password 값을 읽어옴
        const {handleChange, handleLocalLogin} = this;
        const {error} = this.props;


        return (

            <Login>
                <AuthContent>
                    <InputWithLabel
                        label="아이디"
                        name="id"
                        value={id}
                        onChange={handleChange}
                    />
                    <InputWithLabel
                        label="비밀번호"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    {
                        error && <AuthError>{error}</AuthError>
                    }
                    <AuthButton onClick={handleLocalLogin}>로그인</AuthButton>
                    <JoinLink to="/auth/register">회원가입</JoinLink>
                </AuthContent>
            </Login>

        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form']),
        error: state.auth.getIn(['login', 'error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(LoginContainer);
