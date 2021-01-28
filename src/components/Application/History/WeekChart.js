import React, { useState, useEffect} from "react";
import { Line } from "react-chartjs-2";


const WeekChart = () => {
    
const [chartData, setChartData] = useState({})
   
    const chart = () => {
        setChartData({
            labels: ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"],
            datasets: [
                { 
                    label: "level of thickens",
                    data: [4,4,4,4,4,4,4],
                    backgroundColor: [
                        "rgba(240,56,155, 0.6)"
                    ],
                    bodrderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        chart();
    }, [])


    return (
        <Line data={chartData} option={{
            responsive: true,
            title: {text: "Twoje ostatnie siedem dni praktyki", display: true},
            scales: {
                yAxes: [
                    { 
                        ticks: {
                            autoSkip:true,
                            maxTicksLimit: 10,
                            beginAtZero: true,
                        },
                        gridlines: {
                            display: false,
                        }
                    }
                ]
            }
        }}/>
    )
}
export default WeekChart;
