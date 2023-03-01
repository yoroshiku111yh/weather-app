

import { Autocomplete, createFilterOptions, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliceLocation } from './../slice/sliceLocation';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
});

export default function ContainerSearchLocation({ listData = {} }) {
    const dispatch = useDispatch();
    const stateLocation = useSelector(state => state.location);
    const [inputValue, setInputValue] = useState(stateLocation.name);
    const [value, setValue] = useState(stateLocation);
    return (
        <Autocomplete
            className='mui-search-input'
            id="filter-demo"
            options={listData}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            getOptionLabel={(option) => option.name}
            filterOptions={filterOptions}
            inputValue={inputValue}
            value={value}
            renderInput={(params) => <TextField {...params} label="Location" />}
            onChange={(event, newValue) => {
                dispatch(sliceLocation.actions.update(newValue));
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
        />
    );
}