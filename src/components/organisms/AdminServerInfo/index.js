import React from 'react';
import styled from 'styled-components'
import './index.css'
import PageNameBar from "../../molecules/PageNameBar";
import arrowImage from 'assets/img/sub_icon1.png'
import {Bar} from 'react-chartjs-2';
import Button from "../../atoms/Button";

const Wrapper = styled.div`
    overflow:hidden;
    margin-top: 56px;
    width:990px;
`;

const postCountChartData = {
    labels: ["cook_about", "cook_download", "cook_file", "cook_free", "cook_free_ripple", "cook_greet"
        , "cook_member", "cook_memo", "cook_memo_ripple", "cook_qna"
    ],
    datasets: [
        {
            label: "글 수",
            data: [6.10, 12.11, 48.00, 11.16, 3.91,
                4.45, 8.05, 5.56, 3.85, 28.05],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
        }
    ],
};

var options = {
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

const AdminServerInfo = ({...props}) => {
    return (
        <Wrapper>


            <div className="adminServerInfoWrapper">
                <PageNameBar title={'Info'}> </PageNameBar>

                <div>
                    <div className="postCountTableTitle">
                        <img src={arrowImage} alt="adminImage"/>
                        <span>Server & DB info</span>
                    </div>

                    <table id="info_table1" className="table table-bordered table-hover table-striped">
                        <tbody>
                        <tr className="sub_td">
                            <th>시작일</th>
                            <th>서버DB명</th>
                            <th>DB사용량</th>
                            <th>언어셋</th>
                            <th>웹서버</th>
                            <th>PHP</th>
                            <th>MySQL</th>
                        </tr>
                        <tr>
                            <td>2018-07-13</td>
                            <td>sedan</td>
                            <td>0.16&nbsp;MB</td>
                            <td>UTF-8</td>
                            <td>Apache 2.4.33</td>
                            <td>PHP 7.1.16</td>
                            <td>MySQL 5.6.23</td>


                        </tr>
                        </tbody>
                    </table>

                    <div className="postCountTableTitle">
                        <img src={arrowImage} alt="adminImage"/>
                        <span>dev info</span>
                    </div>
                    <table id="info_table2" className="table table-bordered table-hover table-striped">
                        <tbody>
                        <tr className="sub_td">
                            <th>react</th>
                            <th>react-chartjs-2</th>
                            <th>redux</th>
                            <th>redux-saga</th>
                            <th>styled-components</th>
                            <th>axios</th>
                            <th>immutable</th>
                            <th>prop-types</th>
                        </tr>
                        <tr>
                            <td>16.4.1</td>
                            <td>2.7.4</td>
                            <td>4.0.0</td>
                            <td>0.16.0</td>
                            <td>3.3.3</td>
                            <td>0.18.0</td>
                            <td>3.8.2</td>
                            <td>15.6.2</td>
                        </tr>
                        </tbody>
                    </table>


                    <div className="postCountTableTitle">
                        <img src={arrowImage} alt="adminImage"/>
                        <span>테이블별 db사용량</span>
                    </div>

                    <table id="info_table3" className="table table-bordered table-hover table-striped">
                        <tbody>
                        <tr className="sub_td">
                            <th>cook_about</th>
                            <th>cook_download</th>
                            <th>cook_file</th>
                            <th>cook_free</th>
                            <th>cook_free_ripple</th>
                        </tr>
                        <tr>
                            <td>6.10&nbsp;KB</td>
                            <td>12.11&nbsp;KB</td>
                            <td>48.00&nbsp;KB</td>
                            <td>11.16&nbsp;KB</td>
                            <td>3.91&nbsp;KB</td>
                        </tr>
                        <tr className="sub_td">
                            <th>cook_greet</th>
                            <th>cook_member</th>
                            <th>cook_memo</th>
                            <th>cook_memo_ripple</th>
                            <th>cook_qna</th>
                        </tr>
                        <tr>
                            <td>4.45&nbsp;KB</td>
                            <td>8.05&nbsp;KB</td>
                            <td>5.56&nbsp;KB</td>
                            <td>3.85&nbsp;KB</td>
                            <td>28.05&nbsp;KB</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="usageChartWrapper">
                        <div className="usagechartTitle">
                            <span className="usagechartLabel">테이블별 db사용량 (단위:KB)</span>
                        </div>
                        <Bar data={postCountChartData} width={800} height={300} options={options}/>
                    </div>
                    {/*<canvas id="myChart11" width="1680" height="500" style="width: 840px; height: 250px;"></canvas>*/}
                </div>
            </div>
            <div className="goAdminBtnWrapper">
                <Button className="goAdminBtn" onClick={props.history.goBack} width={'114px'} height={'34px'}>관리자
                    페이지로</Button>
            </div>
        </Wrapper>
    );
};

export default AdminServerInfo;
