import React from 'react';
import './index.css';
// import {Link} from 'react-router-dom'
import memoRippleButton from 'assets/img/memo_ripple_button.png'
import memoButton from 'assets/img/memo_button.gif'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 780px;
    padding-left:15px;
`;

const MemoList = () => {
    return (
        <Wrapper>

            <div className="memoWriteWrapper">
                <form name="memo_form" method="post" action="insert.php">
                    <div className="memoWriteUser"><span> 세단</span></div>
                    <div className="memoWriteTextArea"><textarea rows="6" cols="95" name="content"></textarea></div>
                    <div className="memoWriteSubmitBtn"><input type="image" src={memoButton} alt="input"/></div>
                </form>
            </div>

            <ul className="memoList">

                <li className="memoContainer">
                    <div className="memoTitle">
                        <ul>
                            <li className="memoViewNumber">49</li>
                            <li className="memoWriter">세단</li>
                            <li className="memoDate">2018-06-08(01:23)</li>
                            <li className="memoDelBtn">
                                <a href="delete.php?num=64">[삭제]</a></li>
                        </ul>
                    </div>
                    <div className="memoContent">메모를 남기는 테스트 입니다. 이것은 메모를 남기는 테스트 입니다. 테스트2</div>
                    <div className="memoRippleWrapper">
                        <div className="memoRippleGroupArea">덧글</div>
                        <div className="memoRippleMainArea">
                            <ul className="memoRippleList">

                                <li className="memoRippleContainer">
                                    <div className="memoRippleTitle">
                                        <ul>
                                            <li>admin&nbsp;&nbsp;&nbsp; 2018-07-19(08:58)</li>
                                            <li className="memoRippleDelBtn">
                                                <a href="delete_ripple.php?num=29">삭제</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="memoRippleContent">
                                        <p>이것은 리플을 남기는 테스트입니다.</p>
                                    </div>
                                </li>

                                <div className="memoRippleContainer">
                                    <div className="memoRippleTitle">
                                        <ul>
                                            <li>admin&nbsp;&nbsp;&nbsp; 2018-07-19(08:58)</li>
                                            <li className="memoRippleDelBtn">
                                                <a href="delete_ripple.php?num=29">삭제</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="memoRippleContent">
                                        <p>리플입니다.</p>
                                    </div>
                                </div>
                            </ul>

                            <div className="memoRippleForm">

                                <form name="rippleForm" method="post" action="insert_ripple.php">

                                    <div className="rippleFormContent">
                                        <textarea rows="3" cols="80" name="ripple_content"></textarea>
                                    </div>
                                    <div className="rippleSubmitBtn"><input type="image" src={memoRippleButton}
                                                                            alt="input"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="memoContainer">
                    <div className="memoTitle">
                        <ul>
                            <li className="memoViewNumber">49</li>
                            <li className="memoWriter">세단</li>
                            <li className="memoDate">2018-06-08(01:23)</li>
                            <li className="memoDelBtn">
                                <a href="delete.php?num=64">[삭제]</a></li>
                        </ul>
                    </div>
                    <div className="memoContent">테스트2</div>
                    <div className="memoRippleWrapper">
                        <div className="memoRippleGroupArea">덧글</div>
                        <div className="memoRippleMainArea">


                            <div className="memoRippleContainer">
                                <div className="memoRippleTitle">
                                    <ul>
                                        <li>admin&nbsp;&nbsp;&nbsp; 2018-07-19(08:58)</li>
                                        <li className="memoRippleDelBtn">
                                            <a href="delete_ripple.php?num=29">삭제</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="memoRippleContent">
                                    <p>리플입니다.</p>
                                </div>
                            </div>

                            <div className="memoRippleContainer">
                                <div className="memoRippleTitle">
                                    <ul>
                                        <li>admin&nbsp;&nbsp;&nbsp; 2018-07-19(08:58)</li>
                                        <li className="memoRippleDelBtn">
                                            <a href="delete_ripple.php?num=29">삭제</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="memoRippleContent">
                                    <p>리플입니다.</p>
                                </div>
                            </div>
                            <div className="memoRippleContainer">
                                <div className="memoRippleTitle">
                                    <ul>
                                        <li>admin&nbsp;&nbsp;&nbsp; 2018-07-19(08:58)</li>
                                        <li className="memoRippleDelBtn">
                                            <a href="delete_ripple.php?num=29">삭제</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="memoRippleContent">
                                    <p>리플입니다.</p>
                                </div>
                            </div>
                            <div className="memoRippleForm">

                                <form name="rippleForm" method="post" action="insert_ripple.php">

                                    <div className="rippleFormContent">
                                        <textarea rows="3" cols="80" name="ripple_content"></textarea>
                                    </div>
                                    <div className="rippleSubmitBtn"><input type="image" src={memoRippleButton}
                                                                            alt="input"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>

            <div className="memoPageNumber">◀이전 &nbsp;&nbsp;&nbsp;&nbsp;
                <b>1</b>&nbsp;<a href="memo.php?page=2">2</a>&nbsp;<a
                    href="memo.php?page=3">3</a>&nbsp;<a href="memo.php?page=4">4</a>&nbsp;<a
                    href="memo.php?page=5">5</a>&nbsp;<a href="memo.php?page=6">6</a>&nbsp;<a
                    href="memo.php?page=7">7</a>&nbsp;<a href="memo.php?page=8">8</a>&nbsp;<a
                    href="memo.php?page=9">9</a>&nbsp;<a
                    href="memo.php?page=10">10</a>&nbsp;                            &nbsp;&nbsp;&nbsp;&nbsp;다음
                ▶
            </div>
        </Wrapper>
    )
};
export default MemoList

