import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filtrate } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filtrate(event.currentTarget.value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Find contacts by name"
        id="outlined-textarea"
        placeholder="Enter the name"
        color="secondary"
        size="small"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
};

export default Filter;
