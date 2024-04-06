import { FaSearchLocation } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import { MainWrapper } from "./MainWrapper";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoader2Fill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import React from "react";
import App from "../App";


type WeatherDataProps = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
};

const WeatherApp: React.FC = () => {
  const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(
    null
  );

  const[isLoading,setIsLoading] = React.useState<boolean>(false);

  const[city,setCity] = React.useState("");

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  const fetchWeather = async (city:string)=>{
         
    try{
        const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
        const searchResponse = await axios.get(url);

        const currentWeatherData:WeatherDataProps = searchResponse.data;
        return {currentWeatherData}; 
    }catch(error){
        throw error;
    }
  }

  const handelSearch = async()=>{
    if(city.trim() ===""){
        alert("Enter a city or country")
        return;
    }
    try{
        const {currentWeatherData} = await fetchWeather(city);
        setWeatherData(currentWeatherData);
    }catch(error){
        console.log(error);
    }
    setCity("");
};

  const iconChange =(weather:string)=>{
    let iconElement:React.ReactNode;
    let iconColor:string;

    switch (weather) {
        case "Rain":
            iconElement = <BsFillCloudRainFill/>
            iconColor="#272829";
            break;
        case "Clear":
            iconElement = <BsFillSunFill/>
            iconColor="#FFC436";
            break;    
        case "Clouds":
            iconElement=<BsCloudyFill/>
            iconColor="#102C57";
            break;
        case "Mist":
            iconElement=<BsCloudFog2Fill/>
            iconColor="#279EFF";
            break;   
        default:
            iconElement = <TiWeatherPartlySunny/>
            iconColor="#7B2869";
            break;
    }
    return(
        <span className="icon" style={{color:iconColor}}>
           {iconElement} 
        </span>
    )
  }
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchCurrentWeather(latitude,longitude).then((currentWeather)=>{
        setIsLoading(true);
        setWeatherData(currentWeather);
   }).catch(error=>alert(error))
    });
  },[]);

  return (
    <MainWrapper weather={weatherData ? weatherData.weather?.[0]?.main : undefined}>
    
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="Enter City" value={city} onChange={(e)=>{setCity(e.target.value)}} />
          <div className="searchCirlce">
            <FaSearchLocation className="searchIcon"  onClick={handelSearch}/>
          </div>
        </div>

        {weatherData && isLoading ? (
          <>
            <div className="weartherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">
                {iconChange(weatherData.weather[0].main)}
              </div>
              <h1>{weatherData.main.temp}</h1>
              <h2>{weatherData.weather[0].main}</h2>
            </div>
            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="humidIcon" />
                <div className="humidInfo">
                  <h2>{weatherData.main.humidity}%</h2>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="windLevel">
                <SiWindicss className="windIcon" />
                <div className="windInfo">
                  <h2>{weatherData.wind.speed}km/h</h2>
                  <p>Wind speed</p>
                </div>
              </div>
            </div>
          </>
        ):(
            <div className="loading">
                <RiLoader2Fill className="loadingIcon"/>
                <p>Loading</p>
            </div>
        )}
      </div>

   
      
    </MainWrapper>
    
  );
  
};

export default WeatherApp;
