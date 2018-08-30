import React from 'react';
import styled from 'styled-components'
import './index.css'
import PageNameBar from "../../molecules/PageNameBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import arrowImage from 'assets/img/sub_icon1.png'
// import BootstrapTable from 'react-bootstrap-table-next';
import {Bar, Pie, HorizontalBar, Line} from 'react-chartjs-2';
import Button from "../../atoms/Button";

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
                '#878BB6',
                "#4ACAB4",
                "#FF8153",
                "#FFEA88"
            ]
        }
    ]
};

const memberCountChartData = {
    labels: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
    datasets: [
        {
            data: [4, 8, 3, 6, 6, 9],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

const postCountChartData = {
    labels: ["about", "가입인사", "낙서장", "자유게시판", "자료실", "참여문의"],
    datasets: [
        {
            label: "글 수",
            data: [23, 78, 15, 45, 49, 76],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }
    ],
};

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false,
    },
};

const AdminDashboard = () => {
    return (
        <Wrapper>
            {/*<BootstrapTable*/}
            {/*striped*/}
            {/*hover*/}
            {/*keyField='id'*/}
            {/*postCountChartData={ products }*/}
            {/*columns={ columns } />*/}

            <div className="adminDashBoardWrapper">
                <PageNameBar title={'관리자페이지'}> </PageNameBar>
                <div>
                    <div className="postCountTableTitle">
                        <img src={arrowImage} alt="adminImage"/>
                        <span>게시글 수</span>
                    </div>

                    <table className="dashBoardTable table table-bordered table-hover table-striped">
                        <tbody>
                        <tr>
                            <th>about</th>
                            <th>가입인사</th>
                            <th>낙서장</th>
                            <th>자유게시판</th>
                            <th>자료실</th>
                            <th>참여문의</th>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>26</td>
                            <td>49</td>
                            <td>19</td>
                            <td>24</td>
                            <td>36</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="postChartWrapper">
                    <div className="chartTitle">
                        <span className="chartLabel">카테고리별 작성글 수</span>
                    </div>
                    <Bar data={postCountChartData} width={500} height={459} options={options}/>
                </div>

                <div className="surveyChartWrapper">
                    <div className="chartTitle">
                        <span className="chartLabel">설문 결과</span>
                    </div>
                    <Pie data={surveyResultChartData} width={360} height={270}/>
                    <HorizontalBar data={surveyResultChartData} options={horizontalBarOptions}/>
                </div>

                <table className="dashboardNavigation table table-bordered table-hover table-striped">
                    <tbody>
                    <tr>
                        <th>회원수</th>
                        <th>회원 현황</th>
                        <th>Info</th>
                        <th>설문 등록</th>
                    </tr>
                    <tr>
                        <td>37</td>
                        <td>
                            <Button to='/admin/memberList' className="btn-3d blue">보기</Button>
                        </td>
                        <td>
                            <Button to='/admin/serverInfo' className="btn-3d blue">보기</Button>
                        </td>
                        <td>
                            <Button to='/admin/surveyRegist' className="btn-3d blue">등록</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="memberChartWrapper">
                    <div className="chartTitle">
                        <span className="chartLabel">일자별 가입자 수</span>
                    </div>
                    <Line data={memberCountChartData} options={options}/>
                </div>
            </div>
        </Wrapper>
    );
};

export default AdminDashboard;
