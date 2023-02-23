export const apiUrlWeatherDetailToday = (lat = "10.82", long = "106.63") => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode`
}

export const STATUS_WEATHER_CODE = (weatherCode) => {
    switch(weatherCode){
        case 0 :
            return "Clear sky";
        case 1 :
        case 2 :
        case 3 :
            return "Partly cloudy";
        case 45:
        case 48:
            return "Fog and depositing rime fog";
        case 51:
        case 53:
        case 55:
            return "Drizzle Light";
        case 56:
        case 57:
            return "Freezing Drizzle";
        case 61:
        case 63:
        case 65:
            return "Rain Slight";
        case 66:
        case 67:
            return "Freezing Rain";
        case 71:
        case 73:
        case 75:
            return "Snow fall Slight";
        case 77:
            return "Snow grains";
        case 80:
        case 81:
        case 82:
            return "Rain showers Slight";
        case 85:
        case 86:
            return "Snow showers slight and heavy";
        case 95:
            return "Thunderstorm moderate";
        case 96:
        case 99:
            return "Thunderstorm heavy hail";
    }
}