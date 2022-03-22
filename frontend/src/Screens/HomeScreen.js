import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        /*We send AJAX request and, the AJAX function is an async operation so we use async await*/
        dispatch(listProducts());
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox className="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            )}
        </div>
    );
}
