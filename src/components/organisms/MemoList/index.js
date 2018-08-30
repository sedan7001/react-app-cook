import React from 'react';
import './index.css';
import memoRippleButton from 'assets/img/memo_ripple_button.png'
import memoButton from 'assets/img/memo_button.gif'
import styled from "styled-components";
import {Wave} from 'better-react-spinkit'
import {NavLink} from 'react-router-dom'

const PageButton = styled(NavLink)`
margin: 5px;
`;
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
const MemoList = ({match, pageBtn, posts, loading}) => {

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

    const postList = posts.map(
        (item, index) => {
            let rippleList = posts.toJS()[index].ripples.map(
                (item, index) => (
                    <li key={index} className="memoRippleContainer">
                        <div className="memoRippleTitle">
                            <ul>
                                <li>
                                    {item.nick}&nbsp;&nbsp;&nbsp;
                                    {item.regist_day}}
                                </li>
                                <li className="memoRippleDelBtn">
                                    <a href="">삭제</a>
                                </li>
                            </ul>
                        </div>
                        <div className="memoRippleContent">
                            <p>
                                {item.content}
                            </p>
                        </div>
                    </li>
                )
            );

            return (
                <li key={index} className="memoContainer">
                    <div className="memoTitle">
                        <ul>
                            <li className="memoViewNumber">
                                {item.get('num')}
                            </li>
                            <li className="memoWriter">
                                {item.get('nick')}
                            </li>
                            <li className="memoDate">
                                {item.get('regist_day')}
                            </li>
                            <li className="memoDelBtn">
                                <a href="">[삭제]</a>
                            </li>
                        </ul>
                    </div>
                    <div className="memoContent">
                        {item.get('content')}
                    </div>
                    <div className="memoRippleWrapper">
                        <div className="memoRippleGroupArea">
                            덧글
                        </div>
                        <div className="memoRippleMainArea">
                            <ul className="memoRippleList">
                                {rippleList}
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
            )
        }
    );


    const pageList = pageBtn.map(
        (page, index) => (
            <PageButton to={`/${match.url.split('/')[1]}/page/${page.get('rel')}`} key={index}
                        activeClassName="activePageList">
                {page.get('rel')}
            </PageButton>
        )
    );


    return (
        <Wrapper>
            <div className="memoWriteWrapper">
                <form name="memo_form" method="post" action="insert.php">
                    <div className="memoWriteUser"><span> </span></div>
                    <div className="memoWriteTextArea"><textarea rows="6" cols="95" name="content"></textarea></div>
                    <div className="memoWriteSubmitBtn"><input type="image" src={memoButton} alt="input"/></div>
                </form>
            </div>
            <ul className="memoList">
                {postList}
            </ul>
            <div className="memoPageNumber">
                ◀ 이전&nbsp;&nbsp;
                {pageList}
                &nbsp;&nbsp;다음 ▶
            </div>

        </Wrapper>
    )
};
export default MemoList

