import React from 'react';
import './index.css'
import Button from "../../atoms/Button";

const SurveyResult = ({match}) => {
    return (
        <div className="result">
            <table width="250" height="250" border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                <tr>
                    <td width="180" height="1" colSpan="5" bgcolor="#ffffff"></td>
                </tr>
                <tr>
                    <td width="1" height="35" bgcolor="#ffffff"></td>
                    <td width="9" bgcolor="#ffffff"></td>
                    <td width="150" bgcolor="#ffffff"><b>
                        총 투표수 : 0 &nbsp;명 </b></td>
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
                    <td> (<b>10</b> %)
                        20명
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

                                <td width="10%" bgcolor="purple"></td>
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
                    <td> (<b>25</b> %)
                        50명
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

                                <td width="25%" bgcolor="blue"></td>
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
                    <td> (<b>5</b> %)
                        10명
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

                                <td width="5%" bgcolor="green"></td>
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
                    <td> (<b>60</b> %)
                        120명
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

                                <td width="60%" bgcolor="skyblue"></td>
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
    );
};

export default SurveyResult;
