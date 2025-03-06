import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Info.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({info}) {
    const hot="https://images.unsplash.com/photo-1559767180-47d8f4919e5d?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain="https://plus.unsplash.com/premium_photo-1733436277091-b745ba87a991?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    
    return (
        <div className='infoComponent'>

            <h2>Weather Information of {info.city}</h2>
            <div className='info'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?rain :info.temp>15 ? hot:cold}
                       
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;<span>{info.humidity>80? <ThunderstormIcon/>:info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/>}</span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temprature = {info.temp}&deg;C</p>
                            <p>Weather Feels like = {info.feelsLike}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Maximum Temprature = {info.tempMax}&deg;C</p>
                            <p>Minimum Temprature = {info.tempMin}&deg;C</p>
                            <p>The Weather can be described as <b>{info.weather} </b>feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}