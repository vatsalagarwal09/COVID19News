import React from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./LineGraph.module.css";

const Graph = ({ data }) => {
  const lineChart = data.length ? (
    <Line
      data={{
        labels: data.map(({ date }) => date),
        datasets: [
          {
            data: data.map(({ dailydeceased }) => dailydeceased),
            label: "Daily Deaths",
            borderColor: "#cd0000",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Graph;
