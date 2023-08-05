import axios from 'axios'
import React,{useState} from "react";
import "./css/style.css";
function TempApp() {
  const [data,setData]=useState({
    celsius:10,
    name:'London',
    humidity:10,
    speed:2
  })

  const [name,setName]=useState('')
  const handleClick=() => {
    if(name!==""){
      const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d1c4f48c950beb52f0bb851be9597057&units=metric`
    axios.get(apiUrl)
    .then(res=>{
      setData({...data, celsius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
    })
    .catch(err=>console.log(err))
    }
  }
  return (
    <div>
      <div className="container">
        <div className="weather">
          <div className="search">
            <input
              type="text"
              className="search"
              placeholder="Enter City Name"
              onChange={(e)=>setName(e.target.value)}
            />
            <button>
              <img
                width="88"
                height="33"
                src="https://img.icons8.com/fluency/48/search.png"
                alt="search"
                onClick={handleClick}
              />
            </button>
          </div>
          <div className="winfo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1146/1146856.png"
              alt=""
            />
            <h1>{Math.round(data.celsius)} °C</h1>
            <br />
            <h2>{data.name}</h2>
          </div>
          <div className="details">
            <div className="col">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3262/3262966.png"
                alt=""
              />
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
              <div className="col">
                <img
                  src="https://o.remove.bg/downloads/19329ca3-2b20-42f4-9fb4-4437d34abda4/wind-removebg-preview.png"
                  alt=""
                />
                <div className="wind">
                  <p>{Math.round(data.speed)} km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TempApp;
