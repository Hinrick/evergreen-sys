import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core'
import RenderInput from '../Input/Input'
import clear from '../../assests/icons/clear-24px.svg'


const useStyles = makeStyles(theme => ({
  root: {},
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 1000,
    background: "rgba(0, 0, 0, 0.75)",
    zIndex: 10000
  },
  modal: {
    overflow: "scroll",
    position: "fixed",
    padding: 30,
    top: "10vh",
    left: "10%",
    width: "80%",
    minWidth: 200,
    height: "80vh",
    background: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
    zIndex: 1000,
    borderRadius: 5
  },
  innerContainer: {},
  buttonContainer: {
    borderRadius: 5,
    position: "fixed",
    background: "#fff",
    backgroundColor: "#fff",
    width: "80%",
    top: "85vh",
    left: "10%",
    zIndex: 5000,
    padding: 20
    //   boxShadow: '0 -5px 10px #fff',
  },
  clear: {
    position: "fixed",
    // top: "90vh",
    left:'85%'
  }
}));

const Modal = props => {
    const classes = useStyles(props)

    let modal = null
    if (props.modalStatus) {
        modal = (
          <div className={classes.backdrop}>
            <div className={classes.modal}>
              <div className={classes.clear} onClick={props.onCloseModalHandler}>
                <i class="material-icons md-18">clear</i>
              </div>
              <div className={classes.innerContainer}>{props.children}</div>
            </div>
            <div className={classes.buttonContainer}>
              <RenderInput
                elementType="button"
                click={props.onCloseModalHandler}
              >
                儲存
              </RenderInput>
            </div>
          </div>
        );
    }
    return(
        <div>{modal}</div>
    )
}




export default Modal
