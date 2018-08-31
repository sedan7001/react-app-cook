import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postViewActions from 'store/modules/postView';
import PostView from "../../../components/organisms/PostView";

class PostViewContainer extends Component {
    state ={
        loading: false
    };
    load = async () => {
        if (this.state.loading) return; // 이미 요청중이라면 무시

        // 로딩 상태 시작
        // this.setState({
        //     loading: true
        // });
        const {PostsActions} = this.props;

        const postNum = this.props.match.params.num;
        const pageName = this.props.match.url.split('/')[1];


        try {
            await PostsActions.loadPostView(postNum, pageName);

        } catch (e) {
            console.log(e);
        }
        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    };


    // handleToggleLike = ({postId, liked}) => {
    //     const { PostsActions, logged } = this.props;
    //
    //     const message = (message) => (<div style={{fontSize: '1.1rem'}}>{message}</div>);
    //     if(!logged) {
    //         return toast(message('로그인 후 이용 하실 수 있습니다.'), { type: 'error' });
    //     }
    //     if(liked) {
    //         PostsActions.unlikePost(postId);
    //     } else {
    //         PostsActions.likePost(postId);
    //     }
    // }
    //
    // handleCommentClick = (postId) => {
    //     const { PostsActions } = this.props;
    //     PostsActions.toggleComment(postId);
    //     setTimeout(() => this.masonry.masonry.layout(), 0);
    // }


    componentDidMount() {
        // 컴포넌트가 마운트 됐을 때 호출 합니다.
        this.load();
    }

    componentDidUpdate(prevProps, prevState) {
        // username 이 변경되면 this.load 를 호출합니다
        // if(prevProps.page !== this.props.match.params.page) {
        //     this.load();
        // }
        if(prevProps.match.url !== this.props.match.url){
            this.load();
        }

    }


    componentWillUnmount() {
        // 컴포넌트가 언마운트 될 때에는 스크롤 이벤트리스너를 제거합니다
    }

    render() {
        const{ loading } = this.state;

        const {data, file_name_0, file_copied_0, files, ripples} = this.props;
        // const { handleToggleLike, handleCommentClick } = this;

        return (
            <PostView
                viewContent={data}
                viewFiles={files}
                viewRipples={ripples}
                props={this.props}
                match={this.props.match}
                loading={loading}
                file_name_0={file_name_0}
                file_copied_0={file_copied_0}

            />
        );
    }
}

export default connect(
    (state) => ({
        data: state.postView.get('data'),
        file_name_0: state.postView.getIn(['data', 'file_name_0']),
        file_copied_0: state.postView.getIn(['data', 'file_copied_0']),

        files: state.postView.getIn(['data', 'files']),
        ripples: state.postView.getIn(['data', 'ripples']),
        logged: state.user.get('logged')
    }),
    (dispatch) => ({
        PostsActions: bindActionCreators(postViewActions, dispatch)
    })
)(PostViewContainer);
