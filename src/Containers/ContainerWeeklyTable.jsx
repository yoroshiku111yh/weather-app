

import { useDispatch, useSelector } from 'react-redux';
import { getWeeklyWeather, sliceWeekly } from './../slice/sliceWeekly';
import { useEffect } from 'react';
import { getStatusWeather, IS_LOCAL } from './../variable';
import WeeklyTable from '../Components/WeeklyTable';
import { roundedToFixed } from '../func';
import { getDummyData } from './../func';

function ContainerWeeklyTable() {
    const dispatch = useDispatch();
    const stateWeekly = useSelector(state => state.weekly);

    const stateLocation = useSelector(state => state.location);

    useEffect(() => {
        if(!IS_LOCAL){
            dispatch(getWeeklyWeather());
        }else{
            const getDummy = getDummyData(stateLocation.name);
            dispatch(sliceWeekly.actions.updateDummy(getDummy.weekly));
        }
    }, [stateLocation.name]);
    
    const data = getDataTableWeekly(stateWeekly.data);
    return (
        <div className='weather-wrapper'>
            <div className='weather-headline'>
                <h4>Weekly Forecast</h4>
            </div>
            <WeeklyTable data={data} />
        </div>
    )
}

function getDataTableWeekly(data = {}) {
    let ar = [];
    if (Object.keys(data).length !== 0) {
        const { time, weathercode, temperature_2m_max, temperature_2m_min } = data.daily;
        for (let i = 0; i < time.length; i++) {
            let obj = {};
            let dateString = time[i];
            let weather = getStatusWeather(weathercode[i]);
            let temp = roundedToFixed((temperature_2m_max[i] + temperature_2m_min[i]) / 2, 1);
            obj.time = new Date(dateString).toLocaleString('en-us', { weekday: 'long' });
            obj.temp = temp;
            obj.weatherStatus = weather;

            ar.push(obj);
        }
    }
    return ar;
}

export default ContainerWeeklyTable;