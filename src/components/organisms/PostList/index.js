import React from 'react';
import './index.css';

const PostList = () => {
    return (
        <div>
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
                        <input type="submit" value="검색"/>
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
                <div className="listItem">
                    <div className="listNumber">23</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=98&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-07-19</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">22</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=97&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-07-19</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">21</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=96&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-07-11</div>
                    <div className="listViewCount">3</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">20</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=95&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-07-11</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">19</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=94&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-07-03</div>
                    <div className="listViewCount">5</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">18</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=92&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-06-27</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">17</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=91&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-06-27</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">16</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=90&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-06-27</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">15</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=89&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-06-27</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listItem">
                    <div className="listNumber">14</div>
                    <div className="listSubject"><a
                        href="view.php?table=cook_about&amp;num=88&amp;item_subject1=테스트&amp;page=1">테스트</a>
                    </div>
                    <div className="listName">세단</div>
                    <div className="listDay">2018-06-27</div>
                    <div className="listViewCount">0</div>
                </div>
                <div className="listPagination">
                    <div className="listPageNumber"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp;
                        <b> 1 </b><a href="list.php?table=cook_about&amp;page=2"> 2 </a><a
                            href="list.php?table=cook_about&amp;page=3"> 3 </a>            &nbsp;&nbsp;&nbsp;&nbsp;다음
                        ▶
                    </div>
                    <button className="writeButton">
                        <a href="write_form.php">글쓰기</a>
                    </button>
                </div>
            </div>
            <div className="clear"></div>


        </div>
    )
};

export default PostList;
