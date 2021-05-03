import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert, Button } from 'antd';
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import alibaba from '../../common/images/ali.png';
import amazon from '../../common/images/ama.png';
import flipkart from '../../common/images/fl.png';
import bewakoof from '../../common/images/bew.png';
import snapdeal from '../../common/images/snap.jpeg';

const initialValues = {
    link: '',
}

const Error = styled.div`
    color: #D8000C;
    font-size: 20px;
    width: auto;
    margin: 0.25rem;
`

const API = {
    URL: 'http://127.0.0.1:8000/api/wishlist/',
}

const validationSchema = Yup.object({
    link: Yup.string().required('Required !').url('Enter Valid URL !'),
});



const AddProduct = () => {
    const handleReload = () => {
        window.location.reload();
    }
    const formSubmitHandler = (values) => {
        const jwttoken = localStorage.getItem('jwt');
        const tokenData = {
            token: jwttoken
        }
        axios.post(process.env.REACT_APP_BACKEND_URL + `api/auth/user`, tokenData)
            .then(res => {
                console.log(res.data);
                const queryData = {
                    url: values.link,
                    username: res.data[0].username
                }
                axios.post(process.env.REACT_APP_BACKEND_URL+`api/wishlist/`, queryData)
                    .then(response => {
                        console.log(response.data);
                        window.location.reload();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log("Server Error")
            })
        // console.log(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form>
                <div className="add-product">
                    <div className="add-product-header">
                        Allow <span style={{ color: "#08b3e4" }}>WISHIMART</span> to let you become a Smart Shopper!
                    </div>
                    <div className="add-product-subheader">
                        We allow our customers to:
                    </div>
                    <div className="add-product-main" style={{color: "#05386B"}}>
                        <CheckCircleFilled style={{ color: "#08b3e4" }} /> Predict Future Prices<span style={{ color: "#eff9fc" }}>.....</span>
                        <CheckCircleFilled style={{ color: "#08b3e4" }} /> Track Product Prices<span style={{ color: "#eff9fc" }}>.....</span>
                        <CheckCircleFilled style={{ color: "#08b3e4" }} /> Track Product Stock<span style={{ color: "#eff9fc" }}>.....</span>
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
                        To view added products goto <button className="studbutton" style={{marginLeft: "10px"}} onClick={handleReload}>My Wishlist</button>
                    </div>
                </div>
            </Form>
        </Formik >
    );
}

export default AddProduct;