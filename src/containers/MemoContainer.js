import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memoViewActions from 'store/modules/memoView';
import MemoList from "../components/organisms/MemoList";

class MemoContainer extends Component {
    state = {
        loading: false
    };
    load = async () => {
        if (this.state.loading) return; // 이미 요청중이라면 무시

        // 로딩 상태 시작
        // this.setState({
        //     loading: true
        // });
        const {MemoActions} = this.props;
        const pageName = this.props.match.url.split('/')[1];
        const page = this.props.match.params.page;

        try {
            await MemoActions.loadMemoView(page, pageName);
        } catch (e) {
            console.log(e);
        }
        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    };

    componentDidMount() {
        // 컴포넌트가 마운트 됐을 때 호출
        this.load();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url) {
            this.load();
        }
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트 될 때에는 스크롤 이벤트리스너를 제거
    }

    render() {
        const {loading} = this.state;
        const {lists, pages} = this.props;
        return (
            <MemoList
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
        data: state.memoView.get('data'),
        nowPage: state.memoView.getIn(['data', 'page']),
        lists: state.memoView.getIn(['data', 'list']),
        pages: state.memoView.getIn(['data', 'links', 'page_list']),
    }),
    (dispatch) => ({
        MemoActions: bindActionCreators(memoViewActions, dispatch)
    })
)(MemoContainer);



