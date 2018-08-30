import React, { Component } from 'react';
// import PostList from 'components/Shared/PostList';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postsActions from 'store/modules/posts';
// import { toast } from 'react-toastify';
import { setRelayoutHandler } from 'lib/withRelayout';
import PostList from "../../../components/organisms/PostList";

class PostListContainer extends Component {
    prev = null;
    state ={
        loading: false
    };
    // 포스트 목록 초기로딩
    load = async () => {
        if (this.state.loading) return; // 이미 요청중이라면 무시

        // 로딩 상태 시작
        this.setState({
            loading: true
        });
        const { PostsActions } = this.props;

        const pageName = this.props.match.url.split('/')[1];

        const  page = this.props.match.params.page;

            try {
            await PostsActions.loadPost(page,pageName);
            const { next } = this.props;

            if(next) {
                // 다음 불러올 포스트들이 있다면 미리 로딩을 해둔다
                await PostsActions.prefetchPost(next);
            }
        } catch (e) {
            console.log(e);
        }
        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    };

    // // 다음 목록 불러오기
    // loadNext = async () => {
    //     const { PostsActions, next } = this.props;
    //
    //     PostsActions.showPrefetchedPost(); // 미리 불러왔던걸 보여준 다음에
    //
    //     if(next === this.prev || !next) return; // 이전에 했던 요청과 동일하면 요청하지 않는다.
    //     this.prev = next;
    //
    //     try {
    //         await PostsActions.prefetchPost(next);
    //     } catch (e) {
    //         console.log(e);
    //     }
    //     this.handleScroll(); // 한번 더 호출함으로써, 인터넷 느린 상황에 밀리는 현상 방지
    // }



    componentDidMount() {
        // 컴포넌트가 마운트 됐을 때 호출 합니다.
        this.load();
        // window.addEventListener('scroll', this.handleScroll);
        setRelayoutHandler(this.handleRelayout);
    }

    componentDidUpdate(prevProps, prevState) {
        // username 이 변경되면 this.load 를 호출합니다
        // console.log(prevProps);
        if(prevProps.match.url !== this.props.match.url){
            this.load();
        }

        if(this.props.nowPage !== this.props.match.params.page) {
            // console.log(this.props);
            this.load();
        }
    }


    componentWillUnmount() {
        // 컴포넌트가 언마운트 될 때에는 스크롤 이벤트리스너를 제거합니다
        // window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const{ loading } = this.state;
        const { lists, pages  } = this.props;
        // const { handleToggleLike, handleCommentClick } = this;

        return (
            <PostList
                posts={lists}
                pageBtn={pages}
                match={this.props.match}
                loading={loading}
            />
        );
    }
}

export default connect(
    (state) => ({
        nowPage: state.posts.getIn(['data','page']),
        lists: state.posts.getIn(['data','list']),
        pages: state.posts.getIn(['data','links','page_list']),
        logged: state.user.get('logged')
    }),
    (dispatch) => ({
        PostsActions: bindActionCreators(postsActions, dispatch)
    })
)(PostListContainer);
