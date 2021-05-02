import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import amazon from '../../common/images/ama.png';

const { Meta } = Card;

export default function Item(props) {
  console.log('lolwat', props.pid);
  return (
    <div
      hoverable
      style={{
        width: "100%",
        borderRadius: "10px",
        padding: "0px",
        backgroundColor: "#EDF5E1",
        borderRadius: "0px",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        maxWidth: "420px",
      }}
      size="small"
    >
      <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 10fr"}}>
          <div><img src={amazon} alt="amazon.in" style={{width:"57px",height:"57px"}}/></div>
          <div className="productname">{props.productName.substring(0, 60)}...</div>
        </div>
        <Button type="primary" className="wishlist-button" style={{width: "30%"}}>
          <a href={props.url} target="_blank">
            Product Website
          </a>
        </Button>
        <Button type="primary" className="wishlist-button" style={{width: "40%"}}>
          <Link to={{
            pathname: '/predict',
            customProps: {
              pid: props.pid,
            }
          }}>
            Predict Price
          </Link>
        </Button>
        <Button type="primary" className="wishlist-button" style={{width: "30%"}}>
          <a href={props.url} target="_blank">
            Delete Product
          </a>
        </Button>
      </div>
    </div>
  );
}
