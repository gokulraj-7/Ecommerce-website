import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../Actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentScreen(props) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="cod"
                            value="Cash On Delivery"
                            name="paymentMethod"
                            required
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                </div>

                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
