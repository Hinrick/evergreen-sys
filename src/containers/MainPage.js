import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import BasicInformationList from './BasicInformation/BasicInformationList'


import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const MainPage = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('')


  useEffect(()=>{

  })

  const hansleStatus = status => {
    setStatus(status)
  }

  const handleDrawerToggle = openStatus => {
    setOpen(openStatus)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        onStatus={status}
        openStatus={open}
        onDrawerToggle={openStatus=>handleDrawerToggle(openStatus)}
      />
      <Sidebar
        onSetStatus={hansleStatus}
        openStatus={open}
        onSidebarToggle={openStatus=>handleDrawerToggle(openStatus)}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <BasicInformationList
        />
      </main>
    </div>
  );
}

const mapStateToProps = props => {
  return{

  }
}


export default connect(mapStateToProps)(MainPage)
