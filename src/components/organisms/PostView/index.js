import React from 'react';
import './index.css';
import titleComment from 'assets/img/title_comment.gif';
import commentSubmitBtn from 'assets/img/ok_ripple.gif';
import Button from "../../atoms/Button";
import styled from 'styled-components'
import {Wave} from 'better-react-spinkit'
import moto from 'assets/img/2016_07_15_12_22_02_0.jpg';

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

const PostView = ({match, file_name_0, file_copied_0, viewContent, viewFiles, viewRipples = [], props, loading}) => {

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
    if (!viewContent) return null;

    const rippleList = viewRipples.map(
        (ripple) => (
            <li key={ripple.get('num')} className="postRippleContainer">
                <div className="postRippleTitle">
                    <ul>
                        <li className="postRippleWriter">
                            {ripple.get('name')}

                        </li>
                        <li className="postRippleDate">
                            {ripple.get('regist_day')}
                        </li>
                        <li className="postRippleDelBtn">
                        </li>
                    </ul>
                </div>
                <div className="postRippleContent">
                    {ripple.get('content')}
                </div>
                <div className="hor_line_ripple"></div>
            </li>
        )
    );

    return (
        <Wrapper>
            <div className="postViewTitle">
                <span className="postViewSubject">
                    {viewContent.get('subject')}
                </span>
                <span className="postViewWriter">
                    {viewContent.get('name')}
                    </span>
                <span>| 조회:</span>
                <span className="postViewCount">
                  {viewContent.get('hit')}
                </span>
                <span>|</span>
                <span className="postViewDay">
                 {viewContent.get('regist_day')}
                </span>
            </div>

            <div className="postViewContent">
                {(match.url.split('/')[1] === 'about') &&
                <img src={moto} alt="aboutImage"/>}
                <p>
                    {viewContent.get('content')}
                </p>
            </div>
            <ul className="postRippleContainer">
                {rippleList}
                {(match.url.split('/')[1] === 'free') &&
                <form name="ripple_form" method="post" action="insert_ripple.php?table=cook_free&amp;num=21">
                    <div className="postRippleWriteWrapper">
                        <div className="postRippleImg"><img src={titleComment} alt="titleComment"/></div>
                        <div className="postRippleTextarea"><textarea rows="5" cols="65"
                                                                      name="postRippleContent"></textarea>
                        </div>
                        <div className="postRippleSubmitBtn"><a><img src={commentSubmitBtn}
                                                                     alt="commentSubmitBtn"/></a></div>
                    </div>
                </form>
                }
            </ul>


            <div className="viewButton">
                <Button onClick={props.history.goBack}>목록</Button>
                <Button>수정</Button>
                <Button>삭제</Button>
            </div>
            <div className="clear"></div>


        </Wrapper>
    )
};

export default PostView;
