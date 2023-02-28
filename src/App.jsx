
import './assets/css/App.css';
import './assets/css/Weather-detail.css';
import './assets/css/Common.css';
import './assets/css/Weather.css';
import './assets/css/mui-search-field.css';

import ContainerWeeklyTable from './Containers/ContainerWeeklyTable';
import ContainerDetail from './Containers/ContainerDetail';
import ContainerHourlyTable from './Containers/ContainerHourlyTable';
import { dummyCities } from './dummy-list-location';
import ContainerSearchLocation from './Containers/ContainerSearchLocation';

function App() {
    return (
        <div className='container test-bg'>
            <div className='search-field'>
                <ContainerSearchLocation listData={dummyCities} />
            </div>
            <div className='weather-detail'>
                <ContainerDetail />
                <ContainerHourlyTable />
                <ContainerWeeklyTable />
            </div>
        </div>
    )
}

export default App;
