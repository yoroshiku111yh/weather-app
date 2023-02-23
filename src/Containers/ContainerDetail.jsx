import imgWeatherCloudRain from '../assets/rain-cloud.png';
import imgIconCloud from '../assets/ico-cloud.png';

function ContainerDetail() {
    return (
        <>
            <div className="weather-detail__icon">
                <img src={imgWeatherCloudRain} alt="weather-rain-cloud" />
            </div>
            <div className='weather-detail__info'>
                <h3 className='weather-detail__location '>Ho Chi Minh City</h3>
                <h4 className='temp-text__big '>
                    28<span>°</span>
                </h4>
                <div className='weather-detail__status '>
                    Precipiptations
                </div>
                <div className='weather-detail__temp-range '>
                    <div>Max : 31<span>°</span></div>
                    <div>Min : 25<span>°</span></div>
                </div>
            </div>
            <div className='weather-wrapper'>
                <div className='weather-headline'>
                    <h4>Today</h4>
                    <div>Mar, 9</div>
                </div>
                <ul className='weather-table-row'>
                    <li className="active">
                        <div className='weather-col__temp'>
                            29<span>°</span>
                        </div>
                        <div className='weather-col__img'>
                            <img src={imgIconCloud} />
                        </div>
                        <div className='weather-col__time'>
                            15:00
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContainerDetail;