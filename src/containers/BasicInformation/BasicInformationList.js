import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  card: {
    marginLeft:'-70px',
    minWidth: 275,
  },
  cardheader:{
    display:'flex'
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
    <div>
      <Card className={classes.card}>
        <CardContent>
          <CardContent className={classes.cardheader}>
            <Typography className={classes.posheader} variant="h5" component="h2">
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
              <span className={classes.bodyheader}>性別 : </span><span>男</span>
            </Typography>
          </CardContent>
          { isShow &&
            <CardContent>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                住民基本資料
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                家屬聯絡資料
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                入住登記
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                外出登記
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                結案作業
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
            </CardContent>
          }
          <CardActions>
            <Button size="small" onClick={showMore}>更多資訊</Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <CardContent className={classes.cardheader}>
            <Typography className={classes.posheader} variant="h5" component="h2">
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
              <span className={classes.bodyheader}>性別 : </span><span>男</span>
            </Typography>
          </CardContent>
          { isShow &&
            <CardContent>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                住民基本資料
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                家屬聯絡資料
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                入住登記
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                外出登記
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
              <Divider />
              <Typography variant="h5" component="h1" style={{marginTop:'20px'}}>
                結案作業
              </Typography>
              <Typography>
                <span className={classes.bodyheader}>入住日期 : </span><span>2016-01-09</span>
              </Typography>
            </CardContent>
          }
          <CardActions>
            <Button size="small" onClick={showMore}>更多資訊</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>

    )
  }

export default BasicInformationList
