import iconSmallSunCloud from './assets/ico-sun-cloud.png';
import iconBigSunCloud from './assets/sun-cloud.png';

import iconCloudSmall from './assets/ico-cloud.png';
import iconCloudBig from './assets/cloud.png';

import iconCloudRainSunSmall from './assets/ico-rain-cloud.png';
import iconCloudRainSunBig from './assets/rain-cloud.png';

import iconStormSmall from './assets/ico-storm.png';
import iconStormBig from './assets/storm.png';

import iconSnowSmall from './assets/ico-snow-fall.png';
import iconSnowBig from './assets/snow-fall.png';

import iconRainSmall from './assets/ico-cloud-rain.png';
import iconRainBig from './assets/cloud-rain.png';

export const apiUrlWeatherDetailToday = (lat = "10.82", long = "106.63") => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode`
}

export const apiUrlWeatherDetailWeekly = (lat = "10.82", long = "106.63", timeZone = "Asia/Singapore") => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timeZone}`
}

export const IS_LOCAL = true;

export const getStatusWeather = (weatherCode) => {
    switch (weatherCode) {
        case 0:
            return {
                text: "Clear sky",
                iconSmall: iconSmallSunCloud,
                iconBig: iconBigSunCloud
            };
        case 1:
        case 2:
        case 3:
            return {
                text: "Partly cloudy",
                iconSmall: iconCloudSmall,
                iconBig: iconCloudBig
            };
        case 45:
        case 48:
            return {
                text: "Fog and depositing rime fog",
                iconSmall: iconCloudSmall,
                iconBig: iconCloudBig
            };
        case 51:
        case 53:
        case 55:
            return {
                text: "Drizzle Light",
                iconSmall: iconSmallSunCloud,
                iconBig: iconBigSunCloud
            };
        case 56:
        case 57:
            return {
                text: "Freezing Drizzle",
                iconSmall: iconCloudSmall,
                iconBig: iconCloudBig
            };
        case 61:
        case 63:
        case 65:
            return {
                text: "Rain Slight",
                iconSmall: iconCloudRainSunSmall,
                iconBig: iconCloudRainSunBig
            };
        case 66:
        case 67:
            return {
                text: "Freezing Rain",
                iconSmall: iconCloudRainSunSmall,
                iconBig: iconCloudRainSunBig
            };
        case 71:
        case 73:
        case 75:
            return {
                text : "Snow fall Slight",
                iconSmall : iconSnowSmall,
                iconBig : iconSnowBig
            };
        case 77:
            return {
                text : "Snow grains",
                iconSmall : iconSnowSmall,
                iconBig : iconSnowBig
            };
        case 80:
        case 81:
        case 82:
            return {
                text : "Rain showers Slight",
                iconSmall : iconRainSmall,
                iconBig : iconRainBig
            };
        case 85:
        case 86:
            return {
                text : "Snow showers slight and heavy",
                iconSmall : iconSnowSmall,
                iconBig : iconSnowBig
            };
        case 95:
            return {
                text: "Thunderstorm moderate",
                iconSmall: iconStormSmall,
                iconBig: iconStormBig
            };
        case 96:
        case 99:
            return {
                text: "Thunderstorm heavy hail",
                iconSmall: iconStormSmall,
                iconBig: iconStormBig
            };
        default:
            return "-.-";
    }
}