import React from 'react';
import s from './Filter.module.css';
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
        // label="Multiline Placeholder"
        placeholder="Enter the name"
        // multiline
        // placeholder="Find contacts by name"
        color="secondary"
        // type="text"
        size="small"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
    // <div className={s.filterBox}>
    //   <label className={s.label}>Find contacts by name</label>
    //   <input
    //     className={s.input}
    //     type="text"
    //     value={filter}
    //     onChange={changeFilter}
    //   />
    // </div>
  );
};

export default Filter;
