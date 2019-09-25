import React, { useState, useEffect }  from 'react'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  List,
  IconButton,
  Collapse
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    flex:'block',
    width: '100%',
    maxWidth: 360,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  list:{
    flexDirection:'column'
  },
  subMenu:{
    display:'none'
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
}));


const drawerWidth = 240;

const menuList = {
  '住民作業':{
    icon:<InboxIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
  '護理照護':{
    icon:<InboxIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
  '營養照護':{
    icon:<InboxIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
  '社工照護':{
    icon:<InboxIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
  '醫藥事':{
    icon:<InboxIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
  '權限管理':{
    icon: <MailIcon />,
    items:['住民基本資料', '家屬聯絡資料', '入住登記', '外出登記', '結案作業', '機構人數統計資料', '住民資料統計'],
    open:false
  },
}



const Sidebar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [ open, setOpen ] = useState(props.openStatus)
  const [ status, setStatus ] = useState('住民基本資料')

  const swichPage = page => {
    setStatus(page)
    props.onSetStatus(status)
  }

  const handleSidebarToggle = () => {
    props.onSidebarToggle(!props.openStatus, status)
    setOpen(!props.openStatus)
  }

  useEffect(()=>{
    setOpen(props.openStatus)
    props.onSetStatus(status)
  })

  return(
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={open=>handleSidebarToggle(open)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>
          {Object.entries(menuList).map((item , index) => (
            <List>
              <ListItem button key={item} onClick={()=>swichPage(item[0])}>
                <ListItemIcon>{item[1].icon}</ListItemIcon>
                <ListItemText primary={item[0]} />
                {item[1].open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={item[1].open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item[1].items.map(item=>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary={item} /></ListItem>)}
                </List>
              </Collapse>
            </List>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}


export default Sidebar
