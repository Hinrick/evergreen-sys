import React, { useState } from 'react'

import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider
} from '@material-ui/core/'


const DisplayForm = props => {
  const classes = makeStyles({
    root:{
    },
    bodyheader:{
      fontWeight:'bold',
      paddingTop:20,
      paddingBottom:5
    },
    cardheader:{
      display:'flex',
    },
  })



  return(
      <CardContent className={classes.root}>
        <h1>{props.displayTitle}</h1>
        <Divider />
        <Typography>
          <span className={classes.bodyheader}>身分證字號 : </span><span>2016-01-09</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>宗教: </span><span>2016-01-09</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>教育程度: </span><span>32-02-26</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>血型 :</span><span>男</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>婚姻狀況 :</span><span>男</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>是否磨粉 :</span><span>男</span>
        </Typography>
        <Typography>
          <span className={classes.bodyheader}>是否洗腎 :</span><span>男</span>
        </Typography>
      </CardContent>

  )
}

export default DisplayForm
