

import { useDispatch, useSelector } from 'react-redux';
import { getWeeklyWeather } from './../slice/sliceWeekly';
import { useEffect } from 'react';
import { getStatusWeather } from './../variable';

function ContainerWeeklyTable() {
    const dispatch = useDispatch();
    const stateWeekly = useSelector(state => state.weekly);
    useEffect(() => {
        dispatch(getWeeklyWeather());
    }, []);
    const dataTable = getDataTableWeekly(stateWeekly.data);
    const listData = dataTable.map((item, index) => (
        <li key = {index}>
            <div className='weather-row__date'>
                {item.time}
            </div>
            <div className='weather-row__icon'>
                <img src={item.weatherStatus.iconSmall} />
            </div>
            <div className='weather-row__temp'>
                {item.temp}<span>°</span>
            </div>
        </li>
    ))
    return (
        <div className='weather-wrapper'>
            <div className='weather-headline'>
                <h4>Next Forecast</h4>
                <div></div>
            </div>
            <ul className='weather-table-col'>
                { listData }
            </ul>
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

function roundedToFixed(input, digits) {
    var rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
}

export default ContainerWeeklyTable;