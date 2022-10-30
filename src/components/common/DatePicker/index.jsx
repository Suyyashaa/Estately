import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

const DatePicker = ({ value, handleSelect }) => {
    const classes = useStyles();

  return (
   
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
        
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Select Move-in Date"
          value={value}
          onChange={handleSelect}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
