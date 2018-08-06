import React from 'react'
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
const SurveyForm = ({data,loading}) => {

    if (loading) {
        // 로딩중일때 로더 보여주기
        return (
            <Wrapper >

                <LoadingWrapper>
                    <Wave color="grey" size={100}/>
                </LoadingWrapper>
            </Wrapper>
        )
    }
    if (!data) return null;
    return (
        <Wrapper>
            <form className="surveyForm" name="survey_form" method="post">
                <table border="0" cellSpacing="0" cellpdding="0" align="center">
                    <tbody>

                    <tr height="10">
                        <td></td>
                    </tr>
                    <tr>
                        <td><b> 이번주 모임에 만들어 보고 싶은 요리는?</b></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="composer" value="ans1" alt="radio"/>1.
                            {data.get('sub1')}
                        </td>
                    </tr>
                    <tr height="5">
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="composer" value="ans2" alt="radio"/>2.
                            {data.get('sub2')}
                        </td>
                    </tr>
                    <tr height="5">
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="composer" value="ans3" alt="radio"/>3.
                            {data.get('sub3')}

                        </td>
                    </tr>
                    <tr height="5">
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="composer" value="ans4" alt="radio"/>4.
                            {data.get('sub4')}

                        </td>
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
                            <Button disabled type="submit" width={"62px"} height={"20px"} theme="dark">투표하기</Button>
                            <Button to="/survey/result" width={"62px"} height={"20px"}>결과보기</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </Wrapper>
    )
};

export default SurveyForm
