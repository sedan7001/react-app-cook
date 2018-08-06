import React, {Component} from 'react';
import {LoginButton, UserThumbnail} from 'components/Base/Header';
import {connect} from 'react-redux';
import * as userActions from 'store/modules/user';
import * as baseActions from 'store/modules/base';
import {bindActionCreators} from 'redux';
import UserMenuContainer from './UserMenuContainer';
import Header from "../../components/organisms/Header";

class HeaderContainer extends Component {

    handleThumbnailClick = () => {
        const {BaseActions} = this.props;
        BaseActions.setUserMenuVisibility(true);
    };

    render() {
        const {visible, user} = this.props;
        const {handleThumbnailClick} = this;

        if (!visible) return null;


        return (
            <Header>
                {user.get('logged')
                    ? (<UserThumbnail thumbnail={user.getIn('loggedInfo')}
                                      onClick={handleThumbnailClick}/>)
                    : <LoginButton/>
                }
                <UserMenuContainer eventTypes="click"/>
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        user: state.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(HeaderContainer);
