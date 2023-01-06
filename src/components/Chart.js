import { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "../Data";

function Chart() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: '', 
                data: UserData.map((data) => data.income),
                backgroundColor: [
                "rgba(103, 58, 183, 1)",
                ],
                borderRadius: 40,
            },
            {
                label: '', 
                data: UserData.map((data) => data.expenses),
                backgroundColor: [
                "rgba(244, 67, 54, 1)",
                ],
                borderRadius: 40
            },
        ],
  });

  return (
    <div className="App">
        <div>
            <BarChart chartData={userData} />
        </div>
    </div>
  );
}

export default Chart;