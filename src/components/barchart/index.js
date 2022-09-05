import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HistoryBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        width={400}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="on" fill="#FFDDDD" />
        <Bar dataKey="off" fill="#FF4085" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoryBarChart;
