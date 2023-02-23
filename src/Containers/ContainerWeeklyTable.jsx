
import imgWeatherCloudRain from '../assets/rain-cloud.png';
import imgIconCloud from '../assets/ico-cloud.png';

function ContainerWeeklyTable() {
    return (
        <div className='weather-wrapper'>
            <div className='weather-headline'>
                <h4>Next Forecast</h4>
                <div></div>
            </div>
            <ul className='weather-table-col'>
                <li>
                    <div className='weather-row__date'>
                        Monday
                    </div>
                    <div className='weather-row__icon'>
                        <img src={imgIconCloud} />
                    </div>
                    <div className='weather-row__temp'>
                        29<span>°</span>
                    </div>
                </li>
                <li>
                    <div className='weather-row__date'>
                        Monday
                    </div>
                    <div className='weather-row__icon'>
                        <img src={imgIconCloud} />
                    </div>
                    <div className='weather-row__temp'>
                        29<span>°</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ContainerWeeklyTable;