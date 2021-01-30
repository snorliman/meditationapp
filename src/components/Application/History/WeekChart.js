import React, { useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import { isAfter, isBefore, set, subDays } from "date-fns";
import "./WeekChart.scss";


const WeekChart = ({sessionsHistory}) => {
    
const [chartData, setChartData] = useState({});
const [ lastWeek, setLastWeek] = useState([]);
const [twoWeeksAgo, setTwoWeeksAgo] =useState([]);
const [threeWeeksAgo, setThreeWeeksAgo] = useState([]);
const [fourWeeksAgo, setFourWeeksAgo] = useState([]);
const [planedTime1week, setPlanedTime1week] = useState("");
const [ planedTime2week,setPlanedTime2week] = useState('');
const [ planedTime3week,setPlanedTime3week] = useState('');
const [ planedTime4week,setPlanedTime4week] = useState('');
const [activeTime1week, setActiveTime1week] = useState("");
const [ activeTime2week,setActiveTime2week] = useState('');
const [ activeTime3week,setActiveTime3week] = useState('');
const [ activeTime4week,setActiveTime4week] = useState('');
const [activeTime4weekNum, setAciveTime4weekNum] = useState(0);
const [activeTime3weekNum, setAciveTime3weekNum] = useState(0);
const [activeTime2weekNum, setAciveTime2weekNum] = useState(0);
const [activeTime1weekNum, setAciveTime1weekNum] = useState(0);
const [planedTime4weekNum, setPlanedTime4weekNum] = useState(0);
const [planedTime3weekNum, setPlanedTime3weekNum] = useState(0);
const [planedTime2weekNum, setPlanedTime2weekNum] = useState(0);
const [planedTime1weekNum, setPlanedTime1weekNum] = useState(0);
const [scoreWeek1, setScoreWeek1] = useState(0);
const [scoreWeek2, setScoreWeek2] = useState(0);
const [scoreWeek3, setScoreWeek3] = useState(0);
const [scoreWeek4, setScoreWeek4] = useState(0);


const getLastweeks = () => {
    const lastWeekarray = sessionsHistory.filter(item => isAfter(item.date.toDate(), subDays(new Date(), 7) )).sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf()
    }) 
    const twoWeeksAgoarray = sessionsHistory.filter(item => isAfter(item.date.toDate(), subDays(new Date(), 14) ))
    .filter(item => isBefore(item.date.toDate(), subDays(new Date(),7))).sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf()
    })
    const threeWeeksAgoarray = sessionsHistory.filter(item => isAfter(item.date.toDate(), subDays(new Date(), 21) ))
    .filter(item => isBefore(item.date.toDate(), subDays(new Date(),14))).sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf()
    })
    const fourWeeksAgoarray = sessionsHistory.filter(item => isAfter(item.date.toDate(), subDays(new Date(), 28) ))
    .filter(item => isBefore(item.date.toDate(), subDays(new Date(),21))).sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf()
    })
    setLastWeek(lastWeekarray);
    setTwoWeeksAgo(twoWeeksAgoarray);
    setThreeWeeksAgo(threeWeeksAgoarray);
    setFourWeeksAgo(fourWeeksAgoarray)
}
const getPlanedTime = () => {
    if(lastWeek.length > 0) {
    const lastWeekPlanedTime = lastWeek.reduce((a, b) => {
        return a.details.planedtime + b.details.planedtime
    })
    setPlanedTime1weekNum(lastWeekPlanedTime);
     const lastWeekTimePlanedinHour = Math.floor(lastWeekPlanedTime / 60);
     const lasWeekTimePlanedMniutes = lastWeekPlanedTime % 60;
     setPlanedTime1week(`${lastWeekTimePlanedinHour}:${lasWeekTimePlanedMniutes}`)

     const twoWeeksAgoPlanedTime = twoWeeksAgo.reduce((a, b) => {
        return a.details.planedtime + b.details.planedtime
    })
    setPlanedTime2weekNum(twoWeeksAgoPlanedTime);
     const twoWeeksAgoTimePlanedinHour = Math.floor(twoWeeksAgoPlanedTime / 60);
     const twoWeeksAgoPlanedMniutes = twoWeeksAgoPlanedTime % 60;
     setPlanedTime2week(`${twoWeeksAgoTimePlanedinHour}:${twoWeeksAgoPlanedMniutes}`)

     const threeWeeksAgoPlanedTime = lastWeek.reduce((a, b) => {
        return a.details.planedtime + b.details.planedtime
    })
    setPlanedTime3weekNum(threeWeeksAgoPlanedTime);
     const threeWeeksAgoTimePlanedinHour = Math.floor(threeWeeksAgoPlanedTime / 60);
     const threeWeeksAgoTimePlanedMniutes = threeWeeksAgoPlanedTime % 60;
     setPlanedTime3week(`${threeWeeksAgoTimePlanedinHour}:${threeWeeksAgoTimePlanedMniutes}`)

     const fourWeeksAgoPlanedTime = lastWeek.reduce((a, b) => {
        return a.details.planedtime + b.details.planedtime
    })
    setPlanedTime4weekNum(fourWeeksAgoPlanedTime);
     const fourWeeksAgoTimePlanedinHour = Math.floor(fourWeeksAgoPlanedTime / 60);
     const fourWeeksAgoPlanedMniutes = fourWeeksAgoPlanedTime % 60;
     setPlanedTime4week(`${fourWeeksAgoTimePlanedinHour}:${fourWeeksAgoPlanedMniutes}`)
    } else {
        console.log("nie ma tygodnii")
    }
}
const getAciveTime = () => {
    const lastWeekActiveTime = lastWeek.reduce((a, b) => {
        return a.details.activetime + b.details.activetime
    })
    setAciveTime1weekNum(lastWeekActiveTime)
     const lastWeekTimeActiveinHour = Math.floor(lastWeekActiveTime / 60);
     const lasWeekTimeActiveMniutes = lastWeekActiveTime % 60;
     setActiveTime1week(`${lastWeekTimeActiveinHour}:${lasWeekTimeActiveMniutes}`)

     const twoWeeksAgoActiveTime = twoWeeksAgo.reduce((a, b) => {
        return a.details.activetime + b.details.activetime
    })
    setAciveTime2weekNum(twoWeeksAgoActiveTime)
     const twoWeeksAgoTimeActiveinHour = Math.floor(twoWeeksAgoActiveTime / 60);
     const twoWeeksAgoActiveMniutes = twoWeeksAgoActiveTime % 60;
     setActiveTime2week(`${twoWeeksAgoTimeActiveinHour}:${twoWeeksAgoActiveMniutes}`)

     const threeWeeksAgoActiveTime = lastWeek.reduce((a, b) => {
        return a.details.activetime + b.details.activetime
    })
    setAciveTime3weekNum(threeWeeksAgoActiveTime)
     const threeWeeksAgoTimeActiveinHour = Math.floor(threeWeeksAgoActiveTime / 60);
     const threeWeeksAgoTimeActiveMniutes = threeWeeksAgoActiveTime % 60;
     setActiveTime3week(`${threeWeeksAgoTimeActiveinHour}:${threeWeeksAgoTimeActiveMniutes}`)

     const fourWeeksAgoActiveTime = lastWeek.reduce((a, b) => {
        return a.details.activetime + b.details.activetime
    })
    setAciveTime4weekNum(fourWeeksAgoActiveTime)
     const fourWeeksAgoTimeActiveinHour = Math.floor(fourWeeksAgoActiveTime / 60);
     const fourWeeksAgoActiveMniutes = fourWeeksAgoActiveTime % 60;
     setActiveTime4week(`${fourWeeksAgoTimeActiveinHour}:${fourWeeksAgoActiveMniutes}`)
}
const GetScore = () => {
    const week1score = (activeTime1weekNum/100) * planedTime1weekNum;
    const week2score = (activeTime2weekNum/100) * planedTime2weekNum;
    const week3score = (activeTime3weekNum/100) * planedTime3weekNum;
    const week4score = (activeTime4weekNum/100) * planedTime4weekNum;
    setScoreWeek1(week1score);
    setScoreWeek2(week2score);
    setScoreWeek3(week3score);
    setScoreWeek4(week4score);
}


   
    const chart = () => {
        setChartData({
            labels: ["Cztery Tygodnie temu", "Trzy Tygodnie temu", "Dwa Tygodnie", "Tydzień temu"],
            datasets: [
                { 
                    label: "Wyniki Tygodniowe",
                    data: [scoreWeek4, scoreWeek3, scoreWeek2, scoreWeek1],
                    backgroundColor: [
                        "rgba(240,56,155, 0.6)"
                    ],
                    bodrderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        // getLastweeks();
        // getPlanedTime();
        // getAciveTime();
        // GetScore();
        chart();

    }, [])


    return (

        <>
        <table className="greyGridTable">
  <thead>
      <tr>
    <th>&nbsp;</th>
    <th>4 TYGODNIE TEMU</th>
    <th>3 TYGODNIE TEMU</th>
    <th>2 TYGODNIE TEMU</th>
    <th>TYDZIEŃ TEMU</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>LICZBA SESJI</td>
    <td>{fourWeeksAgo.length ? fourWeeksAgo.length + 1: "Nie było sesji"}</td>
    <td>{threeWeeksAgo.length ? threeWeeksAgo.length + 1: "Nie było sesji"}</td>
    <td>{twoWeeksAgo.length ? twoWeeksAgo.length + 1: "Nie było sesji"}</td>
    <td>{lastWeek.length ? lastWeek.length + 1: "Nie było sesji"}</td>
  </tr>
  <tr>
    <td>CZAS ZAPLANOWANY</td>
    <td>{planedTime4week ? planedTime4week : "0"}</td>
    <td>{planedTime3week ? planedTime3week : "0"}</td>
    <td>{planedTime2week ? planedTime2week : "0"}</td>
    <td>{planedTime1week ? planedTime1week : "0"}</td>
  </tr>
  <tr>
    <td>CZAS WYKONANY</td>
    <td>{activeTime4week ? activeTime4week : "0"}</td>
    <td>{activeTime3week ? activeTime3week : "0"}</td>
    <td>{activeTime2week ? activeTime2week : "0"}</td>
    <td>{activeTime1week ? activeTime1week : "0"}</td>
  </tr>
  </tbody>
</table>
        <Line data={chartData} option={{
            responsive: true,
            title: {text: "Twoje ostatnie siedem dni praktyki", display: true},
            scales: {
                yAxes: [
                    { 
                        ticks: {
                            autoSkip:true,
                            min: 0,
                            max: 100,
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
        </>
    )
}
export default WeekChart;
