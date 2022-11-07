import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const HistoryBarChart = ({ data }) => {
  const total = data.reduce((acc, current) => acc + current.value, 0);
  const activeValue = data.find((i) => i.active === true).value;
  const percent = Number.parseInt((100 * activeValue) / total);

  return (
    <div style={{ width: 170, height: 164 }}>
      <ResponsiveContainer>
        <PieChart width={200} height={160}>
          <g>
            <text
              x={88}
              y={85}
              dy={8}
              textAnchor="middle"
              style={{
                fontSize: 34,
              }}
            >
              {percent}%
            </text>
            <text
              x={85}
              y={100}
              dy={8}
              textAnchor="middle"
              style={{
                fontSize: 14,
                fontWeight: 500,
                fill: "#767E76",
              }}
            >
              active devices
            </text>
          </g>

          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={72}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.active ? "#97E11B" : "#FF8E8E"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryBarChart;
