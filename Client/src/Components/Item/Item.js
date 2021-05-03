import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import alibaba from '../../common/images/ali.png';
import amazon from '../../common/images/ama.png';
import flipkart from '../../common/images/fl.png';
import bewakoof from '../../common/images/bew.png';
import snapdeal from '../../common/images/snap.jpeg';

const { Meta } = Card;

const handlePic = ( domain ) => {
  if (domain === "flipkart") {
      return flipkart;
  }
  else if (domain === "amazon"){
      return amazon;
  }
  else if (domain === "alibaba"){
      return alibaba;
  }
  else if (domain === "bewakoof"){
      return bewakoof;
  }
  else if (domain === "snapdeal"){
      return snapdeal;
  }
  else {
    
  }
}

export default function Item(props) {
  console.log('lolwat', props.pid);
  return (
    <div className="wish-card">
      <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 10fr"}}>
          <div><img src={handlePic(props.domain)} alt="amazon.in" style={{width:"57px",height:"57px"}}/></div>
          <div><div className="productname">{props.productName.substring(0, 60)}...</div></div>
        </div>
        <Button type="primary" className="wishlist-button" style={{width: "32%",borderLeft: "0px"}}>
          <a href={props.url} target="_blank">
            Goto Website
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
            Delete
          </a>
        </Button>
      </div>
    </div>
  );
}
