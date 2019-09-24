import React, { useState, useEffect } from 'react'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  appBar: {
    backgroundColor:'#50B994',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    },)
  },
  subHeader:{
    fontSize:'5px',
    marginBottom:'-7px'
  }
}))

const drawerWidth = 240;

const Header = props => {
  const classes = useStyles()
  const [ open, setOpen ] = useState(!props.openStatus)
  const [status, setStatus] = useState('')

  useEffect(()=>{
    setStatus(props.onStatus)
    setOpen(!props.openStatus)
  })


  const handleDrawerToggle = () => {
    props.onDrawerToggle(open)
    setOpen(!open)
  }



  return(
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]:props.openStatus,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, !open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {status}
          </Typography>
          <ChevronRightIcon className={classes.subHeader}/>
          <Typography variant="h6" noWrap className={classes.subHeader}>
            {status}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
