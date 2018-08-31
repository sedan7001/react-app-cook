import React from 'react';
import './index.css';
import {NavLink, Link} from 'react-router-dom'
import Button from "../../atoms/Button"
import styled from 'styled-components'
import {Wave} from 'better-react-spinkit'


const PageButton = styled(NavLink)`
margin: 5px;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    margin-top: 170px;
    display: inline-flex;
    justify-content: center;
`;
const PostList = ({match, pageBtn, posts, ...props, loading}) => {
    // console.log(match.url.split('/')[1])


    if (loading) {
        // 로딩중일때 로더 보여주기
        return (
            <div className="postListWrapper">

                <LoadingWrapper>
                    <Wave color="grey" size={100}/>
                </LoadingWrapper>
            </div>
        )
    }
    if (!posts) return null;

    const postList = posts.map(
        (post) => (
            <div key={post.get('num')} className="listItem">
                <div className="listNumber">
                    {post.get('num')}
                </div>
                <div className="listSubject">
                    <Link to={`/${match.url.split('/')[1]}/post/${post.get('num')}`}>
                        {post.get('subject')}
                        {post.get('rippleCount') > 0 && ' [' + post.get('rippleCount') + ']'}

                    </Link>
                </div>
                <div className="listName">
                    {post.get('nick')}
                </div>
                <div className="listDay">
                    {post.get('regist_day').substring(0, 10)}
                </div>
                <div className="listViewCount">
                    {post.get('hit')}
                </div>
            </div>
        )
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
        <div className="postListWrapper">
            <form name="boardForm" method="post" action="list.php?table=cook_about&amp;mode=search">
                <div className="listTopSearch">
                    <div className="listSearchCount">
                        <span>▷ 총 23 개의 게시물이 있습니다.</span>
                    </div>
                    <div className="listSearchLabel">
                        <span>SELECT</span>
                    </div>
                    <div className="listSearchSelect">
                        <select name="find">
                            <option value="subject">제목</option>
                            <option value="content">내용</option>
                            <option value="nick">글쓴이</option>
                        </select></div>
                    <div className="listSearchInput"><input type="text" name="search"/></div>
                    <div className="listSearchSubmit">
                        <Button type="submit" disabled theme="dark">검색</Button>
                    </div>
                </div>
            </form>
            <div className="clear"></div>
            <div className="listTopTitle">
                <ul>
                    <li className="listTitleNumber">
                        <span>번호</span>
                    </li>
                    <li className="listTitleSubject">
                        <span>제목</span>
                    </li>
                    <li className="listTitleName">
                        <span>글쓴이</span>
                    </li>
                    <li className="listTitleDay">
                        <span>등록일</span>
                    </li>
                    <li className="listTitleViewCount">
                        <span>조회</span>
                    </li>
                </ul>
            </div>

            <div className="listContent">
                {postList}
                <div className="listPagination">
                    <div className="listPageNumber">
                        ◀ 이전
                        {pageList}
                        다음 ▶
                    </div>
                    {/*<Button to={`${match.url}/write`} theme="dark" width='71px' height='26px'>글쓰기</Button>*/}
                </div>
            </div>
            <div className="clear"></div>


        </div>
    )
};

export default PostList;
