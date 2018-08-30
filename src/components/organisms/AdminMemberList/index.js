import React from 'react';
import styled from 'styled-components'
import './index.css'
import PageNameBar from "../../molecules/PageNameBar";
import BootstrapTable from 'react-bootstrap-table-next';
import Button from "../../atoms/Button";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import paginationFactory from 'react-bootstrap-table2-paginator';

const Wrapper = styled.div`
    overflow:hidden;
    margin-top: 56px;
    width:990px;
`;


const products = [
    {
        id: 'cskang',
        name: '강찬숙',
        nick: 'cskang',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    },
    {
        id: 'srkim',
        name: '강찬숙',
        nick: 'srkim',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'ycshul',
        name: '강찬숙',
        nick: 'ycshul',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'yjbae',
        name: '강찬숙',
        nick: 'yjbae',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'yskim',
        name: '박지은',
        nick: 'yskim',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'ypji',
        name: '이현우',
        nick: 'ypji',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'hwlee',
        name: '정한나',
        nick: 'hwlee',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    }, {
        id: 'hbpark',
        name: '박혜빈',
        nick: 'hbpark',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    },
    {
        id: 'cyahn',
        name: '안철영',
        nick: 'cyahn',
        hp: '010-122-0340',
        email: 'cyahn@gmail.com',
        regist_day: '2016-07-12',
        level: '34'
    }, {
        id: 'kskim',
        name: '박혜빈',
        nick: 'kskim',
        hp: '010-668-8902',
        email: 'cskang@gmail.com',
        regist_day: '2016-07-14',
        level: '21',
    },
    {
        id: 'mskim',
        name: '안철영',
        nick: 'mskim',
        hp: '010-122-0340',
        email: 'cyahn@gmail.com',
        regist_day: '2016-07-12',
        level: '34'
    }
];
const columns = [
    {
        dataField: 'id',
        text: 'id',
        sort: true
    },
    {
        dataField: 'name',
        text: 'name',
        sort: true
    }, {
        dataField: 'nick',
        text: 'nick',
        sort: true
    },
    {
        dataField: 'hp',
        text: 'hp',
        sort: true
    },
    {
        dataField: 'email',
        text: 'email',
        sort: true
    },
    {
        dataField: 'regist_day',
        text: 'regist_day',
        sort: true
    },
    {
        dataField: 'level',
        text: 'level',
        sort: true
    },

];

const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    // paginationTotalRenderer: customTotal,
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: 'All', value: products.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};

const AdminMemberList = ({...props}) => {
    return (
        <Wrapper>


            <div className="adminMemberListWrapper">

                <PageNameBar title={'회원 현황'}> </PageNameBar>
                <div className='tableWrapper'>
                    <BootstrapTable
                        striped
                        hover
                        keyField='id'
                        data={products}
                        columns={columns}
                        pagination={paginationFactory(options)}

                    />
                </div>
                {/*<table id="member_table" className="table table-bordered table-hover table-striped">*/}
                {/*<thead>*/}
                {/*<tr>*/}
                {/*<th>id</th>*/}
                {/*<th>name</th>*/}
                {/*<th>nick</th>*/}
                {/*<th>hp</th>*/}
                {/*<th>email</th>*/}
                {/*<th>regist_day</th>*/}
                {/*<th>level</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}


                {/*</tbody>*/}

                {/*</table>*/}

            </div>
            <div className="goAdminBtnWrapper">
                <Button className="goAdminBtn" onClick={props.history.goBack} width={'114px'} height={'34px'}>관리자
                    페이지로</Button>
            </div>

        </Wrapper>
    );
};

export default AdminMemberList;
