import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";

const ChartComponent = ({ data }) => {
  return (
    <>
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#666666" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="Total" fill="#8a05a8">
          <LabelList
            dataKey="Total"
            position="top"
            formatter={(value) => {
              const formatted = value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              });
              return formatted
            }}
            style={{fill: "white"}}
          />
        </Bar>
      </BarChart>
    </>
  );
};

export default ChartComponent;
