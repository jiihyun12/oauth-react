import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {

    const navigate = useNavigate()


    // 토큰이 있을 때만 접근할 수 있는 페이지

    const {currentUser, isLogin} = useSelector((state)=>state.user)
    const {
        memberEmail,
        memberPicture,
        memberName,
        memberNickName
    } = currentUser;
    console.log("my page current User" , currentUser)
    console.log("mypage islogin" , isLogin)

    useEffect(()=>{
        if(isLogin){
            navigate("/sign-in")
        }
    },[])

    return (
        <div>
            <p>이름 : {memberName} </p>
            <p>닉네임 : {memberNickName} </p>
            <p>이메일 : {memberEmail} </p>
        </div>
    );
};

export default MyPage;