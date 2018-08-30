import React from 'react'
import Heading from "../../atoms/Heading";
import './index.css'
import styled from 'styled-components'
import Button from "../../atoms/Button";

const Wrapper = styled.div`
width:809px;
`;

const PostWrite = ({...props}) => {
    return (
        <Wrapper>


            <div className="write_form_title">
                <Heading level={3}>글쓰기</Heading
                >
            </div>
            <div className="clear"></div>
            <form name="board_form" method="post" encType="multipart/form-data">
                <div className="write_form">
                    <div className="write_line"></div>
                    <div className="postWriteGroupArea">
                        <div className="postWriteLabel"> 별명</div>
                        <div className="postWriteLabel"> 제목</div>
                        <div className="postWriteLabel"> 내용</div>
                        <div className="postWriteLabel"> 이미지파일1</div>
                        <div className="postWriteLabel"> 이미지파일2</div>
                        <div className="postWriteLabel"> 이미지파일3</div>

                    </div>
                    <div className="postWriteMainArea">
                        <div className="postWriteInput"> 세단<input type="checkbox" name="html_ok" value="y"/> HTML 쓰기
                        </div>
                        <div className="postWriteInput"><input type="text" name="subject" value=""/></div>
                        <div className="postWriteInput"><textarea name="content"></textarea></div>
                        <div className="postWriteInput"><input type="file" name="upfile[]"/></div>
                        <div className="postWriteInput"><input type="file" name="upfile[]"/></div>
                        <div className="postWriteInput"><input type="file" name="upfile[]"/></div>
                    </div>

                </div>


            </form>
            <div className="write_button">

                <Button theme="dark">완료</Button>
                <Button onClick={props.history.goBack}>목록</Button>

            </div>
        </Wrapper>
    )
};

export default PostWrite
