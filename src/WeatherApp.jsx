import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo , setWatherInfo]=useState({
        city: "Delhi",
        feelsLike: 24.84,
        humidity: 25.06,
        temp: 25.05,
        tempMin: 23.08,
        tempMax: 25.00,
        weather: "Haze",
    })

    let updateInfo=(result)=>{
        setWatherInfo(result);
    }
    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}