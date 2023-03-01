import { dummyDataHourlyHaNoi, dummyDataHourlyLondon, dummyDataHourlyTokyo, dummyDataHourly, dummyDataHourlyOsaka, dummyDataHourlyNewyork } from "./dummy-data";
import { dummyDataWeeklyHaNoi, dummyDataWeeklyLondon, dummyDataWeeklyTokyo, dummyDataWeekly, dummyDataWeeklyOsaka, dummyDataWeeklyNewyork } from "./dummy-data-weekly";
import { getStatusWeather } from "./variable";

export const getOverviewWeatherData = (data = {}) => {
    let maxTemp = "";
    let minTemp = "";
    let weatherStatus = {};
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

export const getMonthName = (monthNumber) => {
    return new Date('1999-' + monthNumber + '-15').toLocaleString('en-us', { month: 'long' })
}


export const getDataWeatherTableHourly = (data = {}) => {
    let ar = [];
    if (Object.keys(data).length !== 0) {
        const tempInDay = data.hourly.temperature_2m.slice(0, 24);
        const weatherStatusInDay = data.hourly.weathercode.slice(0, 24);
        const hourly = data.hourly.time.slice(0, 24);

        const currentHours = new Date().getHours();

        for (let i = 0; i < 24; i++) {
            let obj = {};
            let time = hourly[i];
            let weather = weatherStatusInDay[i];
            let temp = tempInDay[i];
            obj.time = new Date(time).getHours();
            obj.weatherStatus = getStatusWeather(weather);
            obj.temp = temp;
            obj.isCurrent = obj.time === currentHours ? true : false;
            ar.push(obj);
        }
    }
    return ar;
}


export const roundedToFixed = (input, digits) => {
    var rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
}


export const getDummyData = (nameLocation) => {
    switch(nameLocation){
        case "Ha Noi" :
            return {
                hourly : dummyDataHourlyHaNoi,
                weekly : dummyDataWeeklyHaNoi
            };
        case "Tokyo" :
            return {
                hourly : dummyDataHourlyTokyo,
                weekly : dummyDataWeeklyTokyo
            }
        case "Osaka" :
            return {
                hourly : dummyDataHourlyOsaka,
                weekly : dummyDataWeeklyOsaka
            }
        case "Newyork" :
            return {
                hourly : dummyDataHourlyNewyork,
                weekly : dummyDataWeeklyNewyork
            }
        case "London" :
            return {
                hourly : dummyDataHourlyLondon,
                weekly : dummyDataWeeklyLondon
            }
        case "Ho Chi Minh":
        default :
            return {
                hourly : dummyDataHourly,
                weekly : dummyDataWeekly
            }
    }
}