import React from 'react';
import './index.css';
import titleComment from 'img/title_comment.gif';
import commentSubmitBtn from 'img/ok_ripple.gif';

const PostView = () => {
    return (
        <div>
            <div className="pageSubject">
                <span>소개</span>
            </div>

            <div className="viewComment"> &nbsp;</div>

            <div className="viewTitle">
                <div className="viewSubject">테스트</div>
                <div className="viewCount"> | 조회 : |</div>
            </div>

            <div className="viewContent">
            </div>
            <div className="ripple">
                <form name="ripple_form" method="post" action="insert_ripple.php?table=cook_free&amp;num=21">
                    <div className="ripple_box">
                        <div className="ripple_box1"><img src={titleComment}/></div>
                        <div className="ripple_box2"><textarea rows="5" cols="65" name="ripple_content"></textarea>
                        </div>
                        <div className="ripple_box3"><a href="#"><img src={commentSubmitBtn}
                                                                      onClick="check_input()"/></a></div>
                    </div>
                </form>
            </div>
            <div className="viewButton">
                <button className="smallButton"><a href="list.php?table=cook_free&amp;page=1">목록</a></button>
                <button className="smallButton"><a
                    href="write_form.php?table=cook_free&amp;mode=modify&amp;num=21&amp;page=1">수정</a></button>
                <button className="smallButton"><a href="javascript:del('delete.php?table=cook_free&amp;num=21')">삭제</a>
                </button>
                <button className="writeButton"><a href="write_form.php?table=cook_free">글쓰기</a></button>
            </div>
            <div className="clear"></div>

        </div>


    )
};

export default PostView;
