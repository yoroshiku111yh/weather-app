import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHourlyWeather } from '../slice/sliceHourly';
import OverviewWeather from '../Components/OverviewWeather';
import { getOverviewWeatherData } from './../func';


function ContainerDetail() {
    const dispatch = useDispatch();
    const stateHourly = useSelector((state) => state.hourly);
    const locationState = useSelector(state => state.location);
    useEffect(() => {
        dispatch(getHourlyWeather());
    }, []);
    const data = getOverviewWeatherData(stateHourly.data);
    return (
        <>
            <OverviewWeather
                location={locationState.name}
                maxTemp={data.maxTemp}
                minTemp={data.minTemp}
                weatherStatus={data.weatherStatus}
                currentTemp={data.currentTemp}
            />
        </>
    )
}

export default ContainerDetail;