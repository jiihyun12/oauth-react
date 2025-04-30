import React from 'react';
import PaymentButton from './PaymentButton';
import { useSelector } from 'react-redux';

const Detail = () => {
    const {currentUser} = useSelector((state)=>state.user)
    const {memberEmail, memberName} = currentUser;

    const productName = "영수의 노트북"
    const producPrice = 2000000;

    return (
        <div>
            <p>현재 사용자 : {memberEmail}</p>
            <div>
            <p>결제 상품 : {productName}</p>
            <p>결제 가격 : {producPrice}</p>
            </div>
            <PaymentButton 
            producPrice={producPrice}
            memberEmail={memberEmail}
            productName={productName}
            />
        </div>
    );
};

export default Detail;