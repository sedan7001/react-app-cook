import React from 'react';
import './index.css';
import titleComment from 'assets/img/title_comment.gif';
import commentSubmitBtn from 'assets/img/ok_ripple.gif';
// import { Link } from 'react-router-dom'
import Button from "../../atoms/Button";
import styled from 'styled-components'

const Wrapper = styled.div`
width:809px;
`;


const PostView = ({match, ...props}) => {
    return (
        <Wrapper>

            <div className="postViewTitle">
                <span className="postViewSubject">테스트</span>
                <span className="postViewWriter">세단</span>
                <span>| 조회:</span>
                <span className="postViewCount">4</span>
                <span>|</span>
                <span className="postViewDay">2018-07-18(07:08)</span>
            </div>

            <div className="postViewContent">
                <p>글의 내용이 보여지는 부분입니다.</p>
            </div>


            <ul className="postRippleContainer">
                <li className="postRippleContainer">
                    <div className="postRippleTitle">
                        <ul>
                            <li className="postRippleWriter">admin</li>
                            <li className="postRippleDate">2016-07-17 (10:43)</li>
                            <li className="postRippleDelBtn">
                            </li>
                        </ul>
                    </div>
                    <div className="postRippleContent">나폴리식&nbsp;좋죠!&nbsp;적당한&nbsp;두께!</div>
                    <div className="hor_line_ripple"></div>
                </li>
                <li className="postRippleContainer">

                    <div className="postRippleTitle">
                        <ul>
                            <li className="postRippleWriter">세단</li>
                            <li className="postRippleDate">2016-07-17 (12:22)</li>
                            <li className="postRippleDelBtn">
                                <a href="delete_ripple.php?table=cook_free&amp;num=20&amp;ripple_num=18">[삭제]</a></li>
                        </ul>
                    </div>
                    <div className="postRippleContent">좋습니다</div>
                    <div className="hor_line_ripple"></div>
                </li>

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
