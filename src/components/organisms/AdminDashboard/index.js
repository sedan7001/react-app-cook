import React from 'react';
import styled from 'styled-components'
import './index.css'
import Button from "../../atoms/Button";
import PageNameBar from "../../molecules/PageNameBar";

const Wrapper = styled.div`
        overflow:hidden;
    margin-top: 56px;
    width:990px;

    // margin:auto;
`;
const AdminDashboard = () => {
    return (
        <Wrapper>

            <div className="box">
                <PageNameBar title={'관리자페이지'}> </PageNameBar>

                {/*<div className="box-header">*/}
                {/*<h3 className="box-title">관리자페이지</h3>*/}
                {/*</div>*/}
                <div className="box-body">
                    <h4 className="table_h4"><img src="../img/sub_icon1.png"/><span className="table_sub">게시글 수</span>
                    </h4>

                    <table id="admin_table1" className="table table-bordered table-hover table-striped">
                        <tbody>
                        <tr>
                            <td>about</td>
                            <td>가입인사</td>
                            <td>낙서장</td>
                            <td>자유게시판</td>
                            <td>자료실</td>
                            <td>참여문의</td>
                        </tr>
                        <tr>
                            <td> 23</td>
                            <td>26</td>
                            <td>49</td>
                            <td>19</td>
                            <td>24</td>
                            <td>36</td>
                        </tr>
                        </tbody>
                    </table>


                </div>


                <div id="chart9">
                    <div className="chart_sub"><h5><span className="label label-primary">카테고리별 작성글 수</span></h5></div>
                    <canvas id="myChart1" width="980" height="900"></canvas>
                </div>
                <div id="chart10">
                    <div className="chart_sub"><h5><span className="label label-primary">설문 결과</span></h5></div>
                    <canvas id="myChart2" width="360" height="270"></canvas>
                    <canvas id="myChart3" width="660" height="340"></canvas>
                </div>

                <table id="admin_table2" className="table table-bordered table-hover table-striped">
                    <tbody>
                    <tr>
                        <td colSpan="3">회원수</td>
                        <td>회원 현황</td>
                        <td>서버 정보</td>
                        <td>설문 조사</td>
                    </tr>
                    <tr>
                        <td colSpan="3">37</td>
                        <td><input className="btn btn-danger" type="button" value="보기" onClick="member()"/></td>
                        <td><input className="btn btn-danger" type="button" value="보기" onClick="info()"/></td>

                        <td><input className="btn btn-danger" type="button" value="등록" onClick="survey()"/></td>
                    </tr>
                    </tbody>
                </table>


                <div id="chart11">
                    <div className="chart_sub"><h5><span className="label label-primary">일자별 가입자 수</span></h5></div>
                    <canvas id="myChart4" width="1680" height="800"></canvas>
                </div>
                .
            </div>
        </Wrapper>
    );
};

export default AdminDashboard;
