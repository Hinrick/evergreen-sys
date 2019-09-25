import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
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
              <span className={classes.bodyheader}>入住日期 :</span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>出生日期 :</span><span>2016-01-09</span>
            </Typography>
            <Typography>
              <span className={classes.bodyheader}>性別 :</span><span>男</span>
            </Typography>
          </CardContent>
          { isShow &&
            <CardContent>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
              <Typography variant="body2" component="p">
                男
              </Typography>
            </CardContent>
          }
        </CardContent>
        <CardContent>
          <CardActions>
            <Button size="small" onClick={showMore}>更多資訊</Button>
          </CardActions>
        </CardContent>
      </Card>
    )
  }

export default BasicInformationList
