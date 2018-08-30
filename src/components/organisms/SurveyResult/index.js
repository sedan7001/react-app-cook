import React from 'react';
import './index.css'
import Button from "../../atoms/Button";
import styled from "styled-components";
import {Wave} from 'better-react-spinkit'

const Wrapper = styled.div`
    width:809px;
    overflow: hidden;
    min-height: 475px;
`;


const LoadingWrapper = styled.div`
    width: 100%;
    margin-top: 170px;
    display: inline-flex;
    justify-content: center;
`;
const SurveyResult = ({data, loading}) => {

    if (loading) {
        // 로딩중일때 로더 보여주기
        return (
            <Wrapper>
                <LoadingWrapper>
                    <Wave color="grey" size={100}/>
                </LoadingWrapper>
            </Wrapper>
        )
    }
    if (!data) return null;

    let ans1 = parseInt(data.get('ans1'), 10);
    let ans2 = parseInt(data.get('ans2'), 10);
    let ans3 = parseInt(data.get('ans3'), 10);
    let ans4 = parseInt(data.get('ans4'), 10);

    let total = ans1 + ans2 + ans3 + ans4;

    let funcPercent = (item) => {
        if (0 === item) {
            return 0;
        } else {
            return Math.floor(item / total * 100);
        }
    };

    let ans1_percent = funcPercent(ans1).toString();
    let ans2_percent = funcPercent(ans2).toString();
    let ans3_percent = funcPercent(ans3).toString();
    let ans4_percent = funcPercent(ans4).toString();


    return (
        <Wrapper>
            <div className="surveyResult">
                <table width="250" height="250" border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                    <tr>
                        <td width="180" height="1" colSpan="5" bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td width="1" height="35" bgcolor="#ffffff"></td>
                        <td width="9" bgcolor="#ffffff"></td>
                        <td width="150" bgcolor="#ffffff"><b>
                            총 투표수 : {
                            total
                        } &nbsp;명 </b></td>
                        <td width="9" bgcolor="#ffffff"></td>
                        <td width="1" bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="29" bgcolor="#ffffff"></td>
                        <td></td>
                        <td valign="middle"><b>이번주 모임에 만들어 보고 싶은 요리는?</b></td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="20" bgcolor="#ffffff"></td>
                        <td></td>
                        <td> (
                            <b>    {ans1_percent}
                            </b>
                            %)

                            {data.get('ans1')}

                            명
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="3" bgcolor="#ffffff"></td>
                        <td></td>
                        <td>
                            <table width="130" border="0" height="3" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr>

                                    <td width={`${ans1_percent}%`} bgcolor="purple"></td>
                                    <td width="100%" bgcolor="#dddddd" height="5"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="20" bgcolor="#ffffff"></td>
                        <td></td>
                        <td> (<b>{ans2_percent}</b> %)
                            {data.get('ans2')}

                            명
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="3" bgcolor="#ffffff"></td>
                        <td></td>
                        <td>
                            <table width="130" border="0" height="3" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr>

                                    <td width={`${ans2_percent}%`} bgcolor="blue"></td>
                                    <td width="100%" bgcolor="#dddddd" height="5"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="20" bgcolor="#ffffff"></td>
                        <td></td>
                        <td> (<b>{ans3_percent}</b> %)
                            {data.get('ans3')}

                            명
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="3" bgcolor="#ffffff"></td>
                        <td></td>
                        <td>
                            <table width="130" border="0" height="3" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr>

                                    <td width={`${ans3_percent}%`} bgcolor="green"></td>
                                    <td width="100%" bgcolor="#dddddd" height="5"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>

                    <tr>
                        <td height="20" bgcolor="#ffffff"></td>
                        <td></td>
                        <td> (<b>{ans4_percent}</b> %)
                            {data.get('ans4')}

                            명
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="3" bgcolor="#ffffff"></td>
                        <td></td>
                        <td>
                            <table width="130" border="0" height="3" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr>

                                    <td width={`${ans4_percent}%`} bgcolor="skyblue"></td>
                                    <td width="100%" bgcolor="#dddddd" height="5"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="40" bgcolor="#ffffff"></td>
                        <td></td>
                        <td align="center" valign="middle" className="surveyResultBackBtn">
                            <Button to="/survey" width={"62px"} height={"20px"}>이전으로 </Button>
                        </td>
                        <td></td>
                        <td bgcolor="#ffffff"></td>
                    </tr>
                    <tr>
                        <td height="1" colSpan="5" bgcolor="#ffffff"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default SurveyResult;
