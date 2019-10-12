import React from "react";

import { makeStyles } from "@material-ui/core";

import RenderInput from "../components/Input/Input";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: 12
  }
}));


const displayModalHandler = (props, screen) => {
    props.onDisplayScreen(screen)
    props.modalControl()
}

const InnerHeader = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <RenderInput
        elementType="button"
        buttonType="primary"
        style={{ marginRight: "20px" }}
        click={()=> displayModalHandler(props, 'ADD')}
      >
        {props.addInfo}
      </RenderInput>
      <RenderInput
        elementType="button"
        buttonType="primary"
        click={()=> displayModalHandler(props, 'SETTING')}
      >
        {props.setting}
      </RenderInput>
    </div>
  );
};

export default InnerHeader;
