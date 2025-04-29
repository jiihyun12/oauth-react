import React, { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const Layout = () => {
    // 리덕스에 유저를 추가하는 코드
    // 토큰 정보를 확인하는 코드

    // 쿼리스트링에서 토큰 분리
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const jwtToken = searchParams.get("jwtToken")
    const localJwtToken = localStorage.getItem("jwtToken")

    useEffect(()=>{
        // 만약 쿼리스트링에 토큰이 있다면, 로컬스토리지에 저장
        if(jwtToken){
            localStorage.setItem("jwtToken", jwtToken)
            navigate("/")
        }

        // 토큰이 있다면 그 토큰으로 사용자의 정보를 요청
        if(jwtToken){
            const getUserDatas = async () => {
                const response = fetch("http://localhost:10000/member/profile",{
                    method : "POST",
                    headers : {
                        "Authorization" : `Bearer ${localJwtToken}`
                      }
                     
                    })

            if(!response.ok){

            }

            // const datas = await
        }
        getUserDatas()
    }

    },[localJwtToken])

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;