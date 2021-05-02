import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import amazon from '../../common/images/ama.png';

const { Meta } = Card;

export default function Item(props) {
  console.log('lolwat', props.pid);
  return (
    <div
      className="wish-card"
    >
      <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 10fr"}}>
          <div><img src={amazon} alt="amazon.in" style={{width:"57px",height:"57px"}}/></div>
          <div><div className="productname">{props.productName.substring(0, 60)}...</div></div>
        </div>
        <Button type="primary" className="wishlist-button" style={{width: "32%",borderLeft: "0px"}}>
          <a href={props.url} target="_blank">
            Product Website
          </a>
        </Button>
        <Button type="primary" className="wishlist-button" style={{width: "36%",borderLeft: "0px",borderRight: "0px"}}>
          <Link to={{
            pathname: '/predict',
            customProps: {
              pid: props.pid,
            }
          }}>
            Predict Price
          </Link>
        </Button>
        <Button type="primary" className="wishlist-button" style={{width: "32%",borderRight: "0px"}}>
          <a href={props.url} target="_blank">
            Delete Product
          </a>
        </Button>
      </div>
    </div>
  );
}
