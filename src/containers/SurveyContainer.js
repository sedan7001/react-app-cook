import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as surveyViewActions from 'store/modules/surveyView';
import SurveyForm from "../components/organisms/SurveyForm";
import SurveyResult from "../components/organisms/SurveyResult";

class SurveyContainer extends Component {
    state ={
        loading: false
    };
    load = async () => {
        if (this.state.loading) return; // 이미 요청중이라면 무시

        // 로딩 상태 시작
        // this.setState({
        //     loading: true
        // });
        const {SurveyActions} = this.props;

        // const postNum = this.props.match.params.num;
        // const pageName = this.props.match.url.split('/')[1];


        try {
            await SurveyActions.loadSurveyView();

        } catch (e) {
            console.log(e);
        }
        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    };


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

        const {data} = this.props;
        if(this.props.match.url==='/survey/result'){
            return(
                <SurveyResult
                    props={this.props}
                    loading={loading}
                    data={data}
                    match={this.props.match}
                />

            )
        }

        return (
            <SurveyForm
                props={this.props}
                loading={loading}
                data={data}
            />
        );
    }
}

export default connect(
    (state) => ({
        data: state.surveyView.get('data'),
        logged: state.user.get('logged')
    }),
    (dispatch) => ({
        SurveyActions: bindActionCreators(surveyViewActions, dispatch)
    })
)(SurveyContainer);
