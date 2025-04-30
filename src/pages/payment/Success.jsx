import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Success = () => {

    const navigate = useNavigate();
    const[searchParams] = useSearchParams();
    const [responseData, setResponseData] = useState(null);
    const [isRequestSent, setISRequestSent] = useState(false);
    useEffect(()=>{
        const confirm = async () => {
            const requestData = {
                orderId : searchParams.get("orderId"),
                amount : searchParams.get("amount"),
                paymentKey : searchParams.get("paymentKey")
                
            }
        }

    },[navigate, searchParams])

    return (
        <div>
            결제 성공 페이지
        </div>
    );
};

export default Success;