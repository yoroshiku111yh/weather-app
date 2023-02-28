
function OverviewWeather({ location, maxTemp, minTemp, weatherStatus, currentTemp }) {
    return (
        <>
            <div className="weather-detail__icon">
                <img src={weatherStatus.iconBig} alt="weather-rain-cloud" />
            </div>
            <div className='weather-detail__info'>
                <h3 className='weather-detail__location '>{location}</h3>
                <h4 className='temp-text__big '>
                    {currentTemp}<span>°</span>
                </h4>
                <div className='weather-detail__status '>
                    {weatherStatus.text}
                </div>
                <div className='weather-detail__temp-range '>
                    <div>Max : {maxTemp}<span>°</span></div>
                    <div>Min : {minTemp}<span>°</span></div>
                </div>
            </div>
        </>
    )
}

export default OverviewWeather;
