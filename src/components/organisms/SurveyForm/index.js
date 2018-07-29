import React from 'react'
import './index.css'
import Button from "../../atoms/Button";

const SurveyForm = ({match}) => {
    return (
        <form name="survey_form" method="post">
            <table border="0" cellSpacing="0" cellpdding="0" align="center">
                <tbody>

                <tr height="10">
                    <td></td>
                </tr>
                <tr>
                    <td><b> 이번주 모임에 만들어 보고 싶은 요리는?</b></td>
                </tr>
                <tr>
                    <td><input type="radio" name="composer" value="ans1" alt="radio"/>1.피자</td>
                </tr>
                <tr height="5">
                    <td></td>
                </tr>
                <tr>
                    <td><input type="radio" name="composer" value="ans2" alt="radio"/>2.파스타</td>
                </tr>
                <tr height="5">
                    <td></td>
                </tr>
                <tr>
                    <td><input type="radio" name="composer" value="ans3" alt="radio"/>3.파니니</td>
                </tr>
                <tr height="5">
                    <td></td>
                </tr>
                <tr>
                    <td><input type="radio" name="composer" value="ans4" alt="radio"/>4.샐러드</td>
                </tr>
                <tr height="7">
                    <td></td>
                </tr>
                <tr height="1" bgcolor="#cccccc">
                    <td></td>
                </tr>
                <tr height="7">
                    <td></td>
                </tr>
                <tr>
                    <td className="surveyFormSubmit">
                        <Button type="submit" width={"62px"} height={"20px"} theme="dark">투표하기</Button>
                        <Button to={`${match.url}/result`} width={"62px"} height={"20px"}>결과보기</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    )
};

export default SurveyForm
