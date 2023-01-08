import { useState } from "react";
import BarChart from "./BarChart";
import { Data } from "../data/Data";

export default function Chart() {
    
    const [chartData, setChartData] = useState({
        
        labels: Data.map((data) => data.label),
        datasets: [
            {
                label: 'Income', 
                data: Data.map((data) => data.income),
                backgroundColor: [
                "rgba(103, 58, 183, 1)",
                ],
                borderRadius: 40,
            },
            {
                label: 'Expenses', 
                data: Data.map((data) => data.expenses),
                backgroundColor: [
                "rgba(244, 67, 54, 1)",
                ],
                borderRadius: 40
            },
        ],
  });

  return (     
    <BarChart chartData = {chartData} />
  );
}

