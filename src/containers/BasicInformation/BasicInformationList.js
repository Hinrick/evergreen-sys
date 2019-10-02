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



import RenderInput from '../../components/Input/Input'

const useStyles = makeStyles({
  root:{

  },
  card: {
    minWidth: 275,
  },
  cardheader:{
    display:'flex',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    paddingTop:7,
    marginLeft: 20,
  },
  bodyheader:{
    fontWeight:'bold'
  }
});

const BasicInformationList = props => {
  const classes = useStyles();
  const [ isShow, setIsShow ] = useState(false)

  const showMore = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <CardContent className={classes.cardheader}>
            <Typography variant="h5" component="h2">
              吳文貴
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2F / 206-C
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>出生日期 : </span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>性別 :</span><span>男</span>
            </Typography>
            {/* { isShow &&

            } */}
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="h1" className={classes.cardheader}>
              住民基本資料
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography>
              <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>出生日期 : </span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>性別 :</span><span>男</span>
            </Typography>
            {/* { isShow &&

            } */}
          </CardContent>

        </CardContent>
        <CardContent>
          <CardActions>
            <Button size="small" onClick={showMore}>更多資訊</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
    )
  }

export default BasicInformationList
