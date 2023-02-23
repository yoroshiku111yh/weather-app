
import './assets/css/App.css';
import './assets/css/Weather-detail.css';
import './assets/css/Common.css';
import './assets/css/Weather.css';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, getUsers } from './main';
import { useEffect, useState } from 'react'

import ContainerWeeklyTable from './Containers/ContainerWeeklyTable';
import ContainerDetail from './Containers/ContainerDetail';

import cities from 'cities.json';
import { getHourlyWeather } from './slice/sliceHourly';


// function App() {
//     // const [count, setCount] = useState(0);
//     // const  test = useSelector(state => state );
//     // console.log(test);
//     const dispatch = useDispatch();
//     const count = useSelector(state => state.counter);
//     const users = useSelector(state => state.user.data);
//     console.log(users);
//     useEffect(() => {
//         dispatch(getUsers());
//     }, []);
//     return (
//         <div className="App">
//             <div>
//                 <a href="https://vitejs.dev" target="_blank">
//                     <img src="/vite.svg" className="logo" alt="Vite logo" />
//                 </a>
//                 <a href="https://reactjs.org" target="_blank">
//                     <img src={reactLogo} className="logo react" alt="React logo" />
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <div className="card">
//                 <button onClick={() => { dispatch(increment()) }}>
//                     count is {count}
//                 </button>
//                 <p>
//                     Edit <code>src/App.jsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </div>
//     )
// }

// export default App

function App (){
    const dispatch = useDispatch();
    const stateHourly = useSelector((state) => state.hourly);
    console.log(stateHourly);
    useEffect(() => {
        dispatch(getHourlyWeather());
    }, []);
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
