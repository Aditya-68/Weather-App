import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';



export default function SearchBox({updateInfo}){
    // key=a72a44278a31706d11894f5720529710
    // api=https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // geo=https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="a72a44278a31706d11894f5720529710";

    let[city,setCity]=useState("");
    let [error,seterror]=useState(false);
    let getWeatherInfo= async()=>{
        try{

            let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            
            let jsonResponse=await response.json();
            let result={
                city:`${city}`,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
                
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }


    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async (event)=>{
        try{

            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
            seterror(false)
        }catch(error){
            seterror(true);
        }

    }

    return(
        <div className='searchBox'>
            <h3>Search Weather Here</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Enter City Name" variant="outlined"  required value={city} onChange={handleChange} />
            <br />
            <br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>There is no such Place Exist</p>}
            </form>
        </div>
    )
}