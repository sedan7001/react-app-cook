import React from 'react';
import styled from 'styled-components'
import './index.css'
import PageNameBar from "../../molecules/PageNameBar";
import Button from "../../atoms/Button";
import {Doughnut, HorizontalBar} from 'react-chartjs-2';

const Wrapper = styled.div`
    overflow:hidden;
    margin-top: 56px;
    width:990px;
`;


const surveyResultChartData = {
    labels: ["피자", "파스타", "리조또", "바게뜨"],
    datasets: [
        {
            data: [4, 8, 3, 6],
            backgroundColor: [
                "rgba(247,70,74,0.4)",
                "rgba(151,187,205,0.8)",
                "rgba(253,180,92,0.6)",
                "rgba(70,191,189,0.7)"
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,

        }
    ]
};

const horizontalBarOptions = {
    scales: {
        xAxes: [{
            stacked: true,
        }]
    },
    legend: {
        display: false,
    }
};

const AdminSurveyRegist = ({...props}) => {
    return (
        <Wrapper>
            <div className="adminSurveyRegistWrapper">
                <PageNameBar title={'설문 등록'}> </PageNameBar>
                <div className="adminSurveyRegistContainer">
                    <div className="surveyRegistInputWrapper">
                        <div className="chartTitle">
                            <span className="chartLabel">Insert Survey</span>
                        </div>
                        <form className="form-signin" method="POST" action="survey_insert.php" id="form">
                            <div className="form-group has-warning">
                                <input type="text" className="form-control" name="sub1" placeholder="피자" required=""
                                       autoFocus=""/>
                            </div>
                            <div className="form-group has-success">
                                <input id="inputWarning" type="text" className="form-control search-query" name="sub2"
                                       placeholder="파스타" required=""/>
                            </div>
                            <div className="form-group has-warning">
                                <input type="text" className="form-control" name="sub3" placeholder="리조또" required=""/>
                            </div>
                            <div className="form-group has-success">
                                <input type="text" className="form-control" name="sub4" placeholder="바게뜨" required=""/>
                            </div>

                            <Button className="form-group" disabled width={'264px'}
                                    height={'41px'} background-color={'#878BB6'}>등록</Button>


                        </form>
                    </div>
                    <div className="surveyRegistChartWrapper">
                        <div className="chartTitle">
                            <span className="chartLabel">Survey Result</span>
                        </div>
                        <Doughnut data={surveyResultChartData} width={350} height={170}/>
                        <HorizontalBar data={surveyResultChartData} options={horizontalBarOptions} width={350}
                                       height={120}/>
                    </div>

                </div>

                <div className="goAdminBtnWrapper">
                    <Button className="goAdminBtn" onClick={props.history.goBack} width={'114px'} height={'34px'}>관리자
                        페이지로</Button>
                </div>
            </div>
        </Wrapper>
    );
};

export default AdminSurveyRegist;
