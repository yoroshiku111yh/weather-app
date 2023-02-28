
import { useSelector } from 'react-redux';


import { getDataWeatherTableHourly, getMonthName } from '../func';
import HourlyWeatherTable from './../Components/HourlyTable';

function ContainerHourlyTable() {
    const stateHourly = useSelector((state) => state.hourly);
    const dataTable = getDataWeatherTableHourly(stateHourly.data);
    return (
        <div className='weather-wrapper'>
            <div className='weather-headline'>
                <h4>Today</h4>
                <div>{`${getMonthName(new Date().getMonth())}, ${new Date().getDay()}`}</div>
            </div>
            <HourlyWeatherTable data={dataTable} />
        </div>
    )
}

export default ContainerHourlyTable;