import React, { useState, useEffect } from 'react';
import LineChart from '../LineChart/LineChart';
import Handlestring from './handlestring';
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import Loader from '../Loader/loader';
import { PREDICTION_ENDPOINT } from '../../API';

const link = "https://www.flipkart.com/";
let timeLine = ['11 April', '12 April', '13 April', '14 April', '15 April', '16 April', '17 April'];
let datasetArray = [80, 110, 120, 100, 90, 100, 105];
const typeodData = "Price Prediction";
const min = 0;



const PrePage = (props) => {

    const [loading, setLoading] = useState(true);
    const [timeline, setTimeline] = useState(null);
    const [dataset, setDataset] = useState(null);

    const stateObject = useLocation();
    useEffect(() => {
        axios.get(`${PREDICTION_ENDPOINT}?pid=${stateObject.customProps.pid}`)
            .then((response) => {
                console.log(response);
                const fetchedTimeLine = response.data.map((datapoint) => {
                    return datapoint.date;
                });
                const fetchedDataset = response.data.map((datapoint) => {
                    return datapoint.price;
                });
                setTimeline(fetchedTimeLine);
                setDataset(fetchedDataset);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    return (
        !loading ? (<div className="predict-base">
            <div className="main-predict">
                <div className="upper-main-predict">
                    <Handlestring min={min} />
                </div>
                <div className="chart-box">
                    <div style={{ width: "70%" }}>
                        <LineChart
                            dataSet={dataset}
                            legend={typeodData}
                            timeLine={timeline}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div className="lower-main-predict">
                    <Button type="primary" style={{ backgroundColor: "black", borderColor: "black" }}>
                        <Link to="/">
                            Back to Wishlist
                    </Link>
                    </Button>
                    <Button type="primary" style={{ backgroundColor: "black", borderColor: "black" }}>
                        <a href={link} target="_blank">
                            Product Website
                    </a>
                    </Button>
                </div>
            </div>
        </div>) : (<Loader />)
    );
}

export default PrePage;