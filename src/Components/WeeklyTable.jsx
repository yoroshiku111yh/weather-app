
export default function WeeklyTable({ data }) {
    const listData = data.map((item, index) => (
        <li key={index}>
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
        <ul className='weather-table-col'>
            {listData}
        </ul>
    )
}

