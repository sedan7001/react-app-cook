import React, { Component } from 'react';
import UserMenu, { UserMenuItem, Username } from 'components/molecules/Base/UserMenu';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as userActions from 'store/modules/user';
import PropTypes from 'prop-types';
import storage from 'lib/storage';

import onClickOutside from 'react-onclickoutside';

class UserMenuContainer extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    handleClickOutside = (e) => {
        const { BaseActions } = this.props;
        BaseActions.setUserMenuVisibility(false);
    };

    handleLogout = async () => {
        const { UserActions } = this.props;

        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/';
    };

    handleOpenMyHeurm = () => {
        const { router } = this.context;
        const { username, BaseActions } = this.props;
        router.history.push(`/@${username}`);
        BaseActions.setUserMenuVisibility(false);
    };

    render() {
        const { visible, username } = this.props;
        const { handleLogout, handleOpenMyHeurm  } = this;


        if(!visible) {
            return null;
        }

        return (
            <UserMenu>
                <Username username={username}/>
                <UserMenuItem onClick={handleOpenMyHeurm}>나의 흐름</UserMenuItem>
                <UserMenuItem>설정</UserMenuItem>
                <UserMenuItem onClick={handleLogout}>로그아웃</UserMenuItem>
            </UserMenu>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['userMenu', 'visible']),
        username: state.user.getIn(['loggedInfo', 'username'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(onClickOutside(UserMenuContainer));
