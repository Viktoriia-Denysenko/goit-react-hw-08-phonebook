import React from 'react';
import { Box, TextField } from '@mui/material';
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
        color="primary"
        size="small"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
};

export default Filter;
