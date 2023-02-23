
import './assets/css/App.css';
import './assets/css/Weather-detail.css';
import './assets/css/Common.css';
import './assets/css/Weather.css';

import ContainerWeeklyTable from './Containers/ContainerWeeklyTable';
import ContainerDetail from './Containers/ContainerDetail';

import cities from 'cities.json';

function App (){
    return(
        <div className='container test-bg'>
            <div className='weather-detail'>
                <ContainerDetail />
                <ContainerWeeklyTable />
            </div>
        </div>
    )
}

export default App;
