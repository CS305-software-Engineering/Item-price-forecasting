import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, message } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import alibaba from '../../common/images/ali.png';
import amazon from '../../common/images/ama.png';
import flipkart from '../../common/images/fl.png';
import bewakoof from '../../common/images/bew.png';
import snapdeal from '../../common/images/snap.jpeg';
import { GET_USER_ENDPOINT, WISHLIST_ENDPOINT } from '../../API';

const initialValues = {
    link: '',
}

const Error = styled.div`
    color: #D8000C;
    font-size: 20px;
    width: auto;
    margin: 0.25rem;
`

const validationSchema = Yup.object({
    link: Yup.string().required('Required !').url('Enter Valid URL !'),
});



const AddProduct = () => {

    const formSubmitHandler = (values) => {
        const jwttoken = localStorage.getItem('jwt');
        const tokenData = {
            token: jwttoken
        }
        axios.post(GET_USER_ENDPOINT, tokenData)
            .then(res => {
                console.log(res.data);
                const queryData = {
                    url: values.link,
                    username: res.data[0].username
                }
                axios.post(WISHLIST_ENDPOINT, queryData)
                    .then(response => {
                        message.success("Product Added to wishlist Successfully");
                        setTimeout(() => {
                            window.location.reload();
                        }, 1800);
                    })
                    .catch(err => {
                        message.error(err);
                    });
            })
            .catch(err => {
                message.error(err);
            })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form>
                <div className="add-product">
                    <div className="add-product-header">
                        Allow <span style={{ color: "#5CDB95" }}>WISHIMART</span> to let you become a Smart Shopper!
                    </div>
                    <div className="add-product-subheader">
                        We allow our customers to:
                    </div>
                    <div className="add-product-main" style={{ color: "#5CDB95" }}>
                        <CheckCircleFilled style={{ color: "#EDF5E1" }} /> Predict Future Prices<span style={{ color: "#05386B" }}>.....</span>
                        <CheckCircleFilled style={{ color: "#EDF5E1" }} /> Track Product Prices<span style={{ color: "#05386B" }}>.....</span>
                        <CheckCircleFilled style={{ color: "#EDF5E1" }} /> Track Product Stock<span style={{ color: "#05386B" }}>.....</span>
                    </div>
                    <div className="add-product-grid-1">
                        <div className="add-product-grid-1-item-1">
                            <Field type='text' id='link' name='link' className='add-product-input' placeholder="Enter the URL here" />
                            <ErrorMessage render={error => <Error>{error}</Error>} name='link' />
                        </div>
                        <div className="add-product-grid-1-item-2">
                            <button type='submit' size="large" className="button-add-product">Add Product</button>
                        </div>
                    </div>
                    <div className="add-product-main">
                        Websites supported:
                    </div>
                    <div className="add-product-main">
                        <span><img src={amazon} className="website-icon" alt="amazon.in" /></span>
                        <span><img src={flipkart} className="website-icon" /></span>
                        <span><img src={alibaba} className="website-icon" /></span>
                        <span><img src={bewakoof} className="website-icon" /></span>
                        <span><img src={snapdeal} className="website-icon" /></span>
                    </div>
                    <div className="add-product-main" style={{ marginTop: "10px" }}>
                        To view added products goto <Button size="large" type="primary" className="button-goto-wishlist">My Wishlist</Button>
                    </div>
                </div>
            </Form>

        </Formik >
    );
}

export default AddProduct;