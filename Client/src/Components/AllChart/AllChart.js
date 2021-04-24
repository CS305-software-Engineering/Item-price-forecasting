import React from "react";
import Barchart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";
import { Tabs } from "antd";
const { TabPane } = Tabs;
const AllChart = ({ datasets, legend, timeline }) => {
  const changeHandler = (key) => { };
  const downloadAsImage = (imageLink) => {
    var a = document.createElement('a');
    a.href = imageLink;
    a.download = 'chart.jpeg';
    a.click();
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={changeHandler} >
        <TabPane key="1" tab="Barchart">
          <Barchart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="400"
            height="400"
            downloadAsImage={downloadAsImage}
          />
        </TabPane>
        <TabPane key="2" tab="Linechart">
          <LineChart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="400"
            height="400"
            downloadAsImage={downloadAsImage}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AllChart;
