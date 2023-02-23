import imgWeatherCloudRain from '../assets/rain-cloud.png';
import imgIconCloud from '../assets/ico-cloud.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHourlyWeather } from '../slice/sliceHourly';
import { getStatusWeather } from './../variable';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    const listWeather = data.map((item, index) => (
        <div key={index}>
            <div className='active weather-table-row__item'>
                <div className='weather-col__temp'>
                    {item.temp}<span>°</span>
                </div>
                <div className='weather-col__img'>
                    <img src={imgIconCloud} />
                </div>
                <div className='weather-col__time'>
                    {item.time < 10 ? "0" + item.time : item.time}:00
                </div>
            </div>
        </div>
    ));
    const settings = {
        speed: 500,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false,
        dots: false,
    }
    return (
        <>
            <div className='weather-wrapper'>
                <div className='weather-headline'>
                    <h4>Today</h4>
                    <div>{ `${getMonthName(new Date().getMonth())}, ${new Date().getDay()}`}</div>
                </div>
                <div className='weather-table-row'>
                    <Slider {...settings}>
                        {listWeather}
                    </Slider>
                </div>
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
        const tempInDay = data.hourly.temperature_2m.slice(0, 24);
        const weatherStatusInDay = data.hourly.weathercode.slice(0, 24);
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
        const tempInDay = data.hourly.temperature_2m.slice(0, 24);
        const weatherStatusInDay = data.hourly.weathercode.slice(0, 24);
        const hourly = data.hourly.time.slice(0, 24);

        for (let i = 0; i < 24; i++) {
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

function getMonthName(monthNumber) {
    return new Date('1999-' + monthNumber + '-15').toLocaleString('en-us', { month: 'long' })
  }

export default ContainerDetail;