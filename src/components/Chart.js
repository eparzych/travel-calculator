import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";
import { expenceCategories } from "./EditTrip/Expences";

const COLORS = ["#012E2E", "#0E4747", "#205E5E", "#367272", "#598C8C"];

export default function Chart(props) {

  const { expences } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    let newData = [];
    expenceCategories.forEach(category => {
      let sum = expences.filter(expence => expence.categoryId == category)
        .reduce((prev, curr) => {
          return prev + curr.cost;
        }, 0);
      
      if (sum != 0) {

        newData.push({ name: category, value: sum });
      }
    })
    setData(newData);
  }, [expences]);
  
  return (
    <div style={{ width: "100%", height: "250px" }}>
      <ResponsiveContainer>
        <PieChart margin={{top:15, right:15, bottom:15, left:15}}>
          <Pie dataKey="value"
            data={data} 
            label={(el) => el.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
};
