import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHourlyWeather, sliceHourly } from '../slice/sliceHourly';
import OverviewWeather from '../Components/OverviewWeather';
import { getOverviewWeatherData, getDummyData } from './../func';
import { IS_LOCAL } from './../variable';
import { dummyDataHourly } from './../dummy-data';


function ContainerDetail() {
    const dispatch = useDispatch();
    const stateHourly = useSelector((state) => state.hourly);
    const locationState = useSelector(state => state.location);
    const stateLocation = useSelector(state => state.location);
    
    useEffect(() => {
        if(!IS_LOCAL){
            dispatch(getHourlyWeather());
        }else{
            const getDummy = getDummyData(stateLocation.name);
            dispatch(sliceHourly.actions.updateDummy(getDummy.hourly));
        }
    }, [stateLocation.name]);

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