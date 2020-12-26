import React, { useEffect } from 'react'
import Chart from 'chart.js';
function Result() {
    let c = 5;
    let items = []
useEffect(() => {
          const ctx = document.getElementById("myChart");
          new Chart(ctx, {
            type: "bar",
            data: {
              labels: ["1.Takım", "2.Takım", "3.Takım", "4.Takım", "5.Takım", "6.Takım"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "#f78501",
                    "#7232c5",
                    "#f78501",
                    "#7232c5",
                    "#f78501",
                    "#7232c5"
                  ],
                  borderColor: ["#f78501", "#7232c5", "#f78501", "#7232c5", "#f78501", "#7232c5"],
                  borderWidth: 1
                }
              ]
            }
          });
        });
    return (
        <div>
          <h1 className="mt-5">Sonuçlar</h1>
          <div className="item">
            <canvas id="myChart" width="400" height="400" />
          </div>
        </div>
    )
}

export default Result
