import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HistoryBarChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 164 }}>
      <ResponsiveContainer>
        <BarChart
          width={300}
          height={164}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="on" fill="#FFDDDD" />
          <Bar dataKey="off" fill="#FF4085" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryBarChart;
