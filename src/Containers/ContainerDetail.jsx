import imgWeatherCloudRain from '../assets/rain-cloud.png';
import imgIconCloud from '../assets/ico-cloud.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHourlyWeather } from '../slice/sliceHourly';
import { getStatusWeather } from './../variable';

function ContainerDetail() {
    const dispatch = useDispatch();
    const stateHourly = useSelector((state) => state.hourly);
    const locationState = useSelector(state => state.location);
    useEffect(() => {
        dispatch(getHourlyWeather());
    }, []);
    const data = getOverviewWeatherData(stateHourly.data);
    const dataTable = getDataWeatherTableHourly(stateHourly.data);
    console.log(dataTable);
    return (
        <>
            <OverviewWeather
                location={locationState.name}
                maxTemp={data.maxTemp}
                minTemp={data.minTemp}
                weatherStatus={data.weatherStatus}
                currentTemp={data.currentTemp}
            />
            <HourlyWeatherTable data={dataTable} />
        </>
    )
}

function OverviewWeather({ location, maxTemp, minTemp, weatherStatus, currentTemp }) {
    return (
        <>
            <div className="weather-detail__icon">
                <img src={imgWeatherCloudRain} alt="weather-rain-cloud" />
            </div>
            <div className='weather-detail__info'>
                <h3 className='weather-detail__location '>{location}</h3>
                <h4 className='temp-text__big '>
                    {currentTemp}<span>°</span>
                </h4>
                <div className='weather-detail__status '>
                    {weatherStatus}
                </div>
                <div className='weather-detail__temp-range '>
                    <div>Max : {maxTemp}<span>°</span></div>
                    <div>Min : {minTemp}<span>°</span></div>
                </div>
            </div>
        </>
    )
}

function HourlyWeatherTable({ data }) {
    const listWeather = data.map((item) => (
        <li className="active">
            <div className='weather-col__temp'>
                {item.temp}<span>°</span>
            </div>
            <div className='weather-col__img'>
                <img src={imgIconCloud} />
            </div>
            <div className='weather-col__time'>
                {item.time}:00
            </div>
        </li>
    ))
    return (
        <>
            <div className='weather-wrapper'>
                <div className='weather-headline'>
                    <h4>Today</h4>
                    <div>Mar, 9</div>
                </div>
                <ul className='weather-table-row'>
                    {listWeather}
                </ul>
            </div>
        </>
    )
}

function getOverviewWeatherData(data) {
    let maxTemp = "";
    let minTemp = "";
    let weatherStatus = "";
    let currentTemp = "";
    if (Object.keys(data).length !== 0) {
        const tempInDay = data.hourly.temperature_2m.slice(0, 23);
        const weatherStatusInDay = data.hourly.weathercode.slice(0, 23);
        const currentHour = new Date().getHours();

        weatherStatus = getStatusWeather(weatherStatusInDay[currentHour]);
        currentTemp = tempInDay[currentHour];
        maxTemp = Math.max(...tempInDay);
        minTemp = Math.min(...tempInDay);
    }
    return {
        maxTemp: maxTemp,
        minTemp: minTemp,
        weatherStatus: weatherStatus,
        currentTemp: currentTemp
    }
}

function getDataWeatherTableHourly(data) {
    let ar = [];
    if (Object.keys(data).length !== 0) {
        const tempInDay = data.hourly.temperature_2m.slice(0, 23);
        const weatherStatusInDay = data.hourly.weathercode.slice(0, 23);
        const hourly = data.hourly.time.slice(0, 23);

        for (let i = 0; i < 4; i++) {
            let obj = {};
            let time = hourly[i];
            let weather = weatherStatusInDay[i];
            let temp = tempInDay[i];
            obj.time = new Date(time).getHours();
            obj.weatherStatus = getStatusWeather(weather);
            obj.temp = temp;
            ar.push(obj);
        }
    }
    return ar;
}

export default ContainerDetail;