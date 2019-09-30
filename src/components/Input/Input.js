import React from 'react';

import {
  makeStyles,
  Button,

} from '@material-ui/core'

// import DateFnsUtils from '@date-io/date-fns'

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:props=> props.buttonType === 'primary' ? '#50B994':'#be2c36'
  },
  input:{
    display:'none'
  }
}));


// This input module was composed by material-ui, where can colloectively manage input

const RenderInput = props  => {
    let inputElement = null;
    const classes = useStyles(props)
    // const inputClasses = [classes.InputElement];
    //
    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
      setSelectedDate(date);
    };


    switch ( props.elementType ) {
      case ( 'button' ):
          inputElement =
            <Button
              variant="contained"
              color="primary"
              disabled={props.IsDisable}
              className={classes.button}
              >{props.children}</Button>
          break
        // TODO: fix tje props of upload button
        case ('updloadButton'):
          inputElement =
            (<div>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                  Upload
                </Button>
              </label>
            </div>)
            break
        // case ('datePicker'):
        //   inputElement =
        //   // <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //     // <KeyboardDatePicker
        //     //    margin="normal"
        //     //    id="date-picker-dialog"
        //     //    label="Date picker dialog"
        //     //    format="MM/dd/yyyy"
        //     //    value={selectedDate}
        //     //    onChange={handleDateChange}
        //     //    KeyboardButtonProps={{
        //     //      'aria-label': 'change date',
        //     //    }}
        //     //   />
        //   // </MuiPickersUtilsProvider>
        //     break
        case ('select'):
          inputElement =
        break
        default:
            inputElement = <input
                // className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default RenderInput
