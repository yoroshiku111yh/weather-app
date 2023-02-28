
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HourlyWeatherTable({ data }) {
    const listWeather = data.map((item, index) => {
        let currentClass = item.isCurrent ? "active" : "";
        let classRowItem = "weather-table-row__item " + currentClass;
        let time = item.time < 10 ? "0" + item.time : item.time;
        time += ':00';
        if (item.isCurrent) {
            time = "Now";
        }
        return (
            <div key={index}>
                <div className={classRowItem}>
                    <div className='weather-col__temp'>
                        {item.temp}<span>°</span>
                    </div>
                    <div className='weather-col__img'>
                        <img src={item.weatherStatus.iconSmall} />
                    </div>
                    <div className='weather-col__time'>
                        {time}
                    </div>
                </div>
            </div>
        )
    });
    const settings = {
        speed: 500,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false,
        dots: false,
    }
    return (
        <div className='weather-table-row'>
            <Slider {...settings}>
                {listWeather}
            </Slider>
        </div>
    )
}


export default HourlyWeatherTable;