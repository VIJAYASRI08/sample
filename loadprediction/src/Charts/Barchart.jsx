import React from 'react'
import { Chart as ChartJS , BarElement } from "chart.js/auto"
import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement
)

const Barchart = () => {

   var data = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Load Variation in kW',
          data: [17, 8, 3, 5, 2, 3, 12],
          borderWidth: 1
        }]
      }

    var options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend : {
            labels : {
                fontSize : 26
            }
        }
      }
  return (
    <div>
        <Bar
            data = {data}
            height = {400}
            options = {options}
        />
    </div>
  )
}

export default Barchart