import React, { useState } from 'react';

import {
  makeStyles,
  Button,
  NativeSelect,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  createMuiTheme
} from '@material-ui/core'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';




const useStyles = makeStyles(theme => ({
  root:{
    margin: 0
  },
  button: {
    backgroundColor:props=> props.buttonType === 'primary' ? '#50B994':'#be2c36'
  },
  hiddenInput:{
    display:'none'
  }
}));


const CssTextField = withStyles({
  root:{
    '& label.Mui-focused': {
      color: '#50B994',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#50B994',
    }
  }
})(TextField)

const CustomizedColorCheckbox = withStyles({
  root: {
    color: '#50B994',
    '&$checked': {
      color: '#50B994',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const customTheme = createMuiTheme({
	palette: {
    main:'#50B994',
    light: '#50B994',
		dark:'#50B994'
  },

		secondary: {
			main: '#50B994',
		},
})


// This input module was composed by material-ui, where can colloectively manage input

const RenderInput = props  => {
    let inputElement = null;
    const classes = useStyles(props)
    const selectOption  = props.selectList?  [{value:''}].concat(props.selectList) : ['無選項']
    // const inputClasses = [classes.InputElement];
    //
    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))
    const [selectedValue, setSelectedValue] = useState([])



    const handleDateChange = date => {
      setSelectedDate(date);
    };


    const handleDataChange = value => event => {
      event.preventDefault()
      let fixedValue = selectedValue
      selectedValue.concat(value)
      setSelectedValue(fixedValue)
      console.log(value)
      console.log(fixedValue)
      console.log(selectedValue)
    }


    switch ( props.elementType ) {
      case ( 'button' ):
          inputElement = (
            <div className={classes.root}>
              <Button
                { ...props }
                onClick={props.click}
                variant="contained"
                color="primary"
                disabled={props.IsDisable}
                className={classes.button}
                >{props.children}</Button>
            </div>
          )
          break
        // TODO: fix the props of upload button
        case ('updloadButton'):
          inputElement =
            (<div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.hiddenInput}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.button}>
                    上傳檔案
                  </Button>
                </label>
            </div>)
            break
        case ('datePicker'):
          inputElement = (
            <div className={classes.root}>
              <MuiThemeProvider theme={customTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                     margin="normal"
                     id="date-picker-dialog"
                     label={props.inputlabel}
                     format="MM/dd/yyyy"
                     value={selectedDate}
                     onChange={handleDateChange}
                     KeyboardButtonProps={{
                       'aria-label': 'change date',
                     }}
                     InputProps={{ className: classes.input }}
                    />
                </MuiPickersUtilsProvider>
              </MuiThemeProvider>
            </div>
            )
            break
        case ('select'):
          inputElement = (
            <div className={classes.root}>
              {props.inputlabel? <InputLabel>{props.inputlabel}</InputLabel> : null}
              <NativeSelect
                {...props} 
              >
                {selectOption.map(item=><option key={item.value} value={item.value}>{item.label}</option>) }
              </NativeSelect>
            </div>
          )
        break
        case ('input'):
          inputElement = (
            <div className={classes.root}>
              <CssTextField
                {...props}
                onChange={handleDataChange}
                label={props.inputlabel}
              />
            </div>
          )
        break
        case ('checkbox'):
          inputElement = (
            <div className={classes.root}>
              <FormControlLabel
                {...props}
                label={props.inputlabel}
                control={<CustomizedColorCheckbox />}
              />
            </div>
          )
        break
        default:
            inputElement = (
              <div className={classes.root}>
                <CssTextField
                  label={props.inputlabel}
                />
              </div>
            )
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default RenderInput
