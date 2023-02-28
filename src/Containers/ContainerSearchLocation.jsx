

import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sliceLocation } from './../slice/sliceLocation';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
});

export default function ContainerSearchLocation({ listData = {} }) {
    const dispatch = useDispatch();
    const stateLocation = useSelector(state => state.location);
    console.log(stateLocation);
    return (
        <Autocomplete
            className='mui-search-input'
            id="filter-demo"
            options={listData}
            getOptionLabel={(option) => option.name}
            filterOptions={filterOptions}
            value={listData[0]}
            renderInput={(params) => <TextField {...params} label="Location" />}
            onChange={(event, newValue) => {
                dispatch(sliceLocation.actions.update(newValue))
            }}
        />
    );
}