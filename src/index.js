import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const api = {
  key:"278b8f47d0c87b7441667cb98d6b6ae9",
  url:`https://api.openweathermap.org/data/2.5/`
}

function  App(){
  const [name,setName] = useState("nigeria");
  const [weather,setWeather] = useState("app");
   const [temprature,setTemp] = useState("15°c");
   const [degree,setDegree] = useState(" Cold");
  const date = (d) =>{
 const arrofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
 const arrofyear = ["January","Febuary","March","April","May","June","July","August","September",
 "October","November","December"]
 const day = arrofday[d.getDay()];
 const num = d.getDate();
 const month = arrofyear[d.getMonth()];
 const year = d.getFullYear();
 return (
   `
   ${day}
   ${num}
  ${month}
  
  `
 );
  }
  const handlePress = (event) =>{
if(event.key === "Enter"){
  const url = `${api.url}weather?q=${name}&appid=${api.key}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
var { main} = data;
if( main.temp > 24){
setWeather("app warm")
  setDegree("Warm")  
}
else{
  setWeather("app") 
  setDegree("Cold") 
}
setTemp(`${Math.floor(main.temp)}°c`)
  })
  .catch((e)=>{
    alert("Please Turn On Your Internet Connectionb OR Search For A Valid City Or Country")
  })
}
  }
  const handleChange = (e) => {
   const val = e.target.value;
   setName(val)
    }
  return (
    <div className={weather}>
      <main>
  <input className="input" onChange={handleChange} onKeyPress={handlePress} type="text" placeholder="Search..."/>
  <div className="location__box">
  <div className="location">{name}</div>
  <div className="date">{date(new Date())}</div>
  </div>
  <div className="weather__box">
<span className="temp">{temprature}</span>
<div className="weather">
  {degree}
</div>
  </div>
  </main>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
