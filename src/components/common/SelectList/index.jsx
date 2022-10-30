import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { MenuItem } from '@material-ui/core'


const SelectList
 = ({options, value, handleSelect, inputLabel}) => {
  return (
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="PropertyType"
    onChange={handleSelect}
  >
    {options.map(({ label, id, value }) => (
        <MenuItem key={id} value={value}>
          {label}
        </MenuItem>
      ))}

  </Select>
</FormControl>
  )
}

export default SelectList



