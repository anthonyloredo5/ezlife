import React from 'react';
import clsx from 'clsx';
import ThemeContext from '../Context.js'
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import StarsIcon from '@material-ui/icons/Stars';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid'
import { Button } from 'reactstrap';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
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
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
}));

export default function PersistentDrawerLeft(props) {
  const history = useHistory();
  const { createContext, useContext, useState } = React;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const stateFromApp = useContext(ThemeContext);
  const Clock = stateFromApp.userState.result.Clock;
  const ToDos = stateFromApp.userState.result.ToDos;
  const Fitness = stateFromApp.userState.result.Fitness;
  const Goals = stateFromApp.userState.result.Goals;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    stateFromApp.updateUser(null);
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <IconButton
              aria-label="list"
            >
              <Link href="/dash">
              <FavoriteBorderIcon style={{ color: "#fdd835" }} 
              /></Link>
              
            </IconButton>
            ezlife
          </Typography>
            <IconButton onClick={props.getStarted} edge='end' style={{ position: "absolute", right: 0, marginRight: "10px", color: "white" }}>
              Get Started
        </IconButton>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />


        
       {/* {Clock ? (<List component="nav" aria-label="pages">
          {[{ text: 'Timer', url: "/timer", icon: <AccessAlarmIcon /> }, ].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? < AccessAlarmIcon/> : <FormatListBulletedIcon/>}</ListItemIcon> */}
                {/* <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        // </List>) : (null)}  */} 

        {ToDos ? (<List component="nav" aria-label="pages">
          {[{ text: 'To-do', url: "/todo", icon: <FormatListBulletedIcon /> }, ].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? < AccessAlarmIcon/> : <FormatListBulletedIcon/>}</ListItemIcon> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>) : (null)}


        {Fitness ? (<List component="nav" aria-label="pages2">
          {[{ text: 'Workouts', url: '/fitness', icon: <FitnessCenterIcon /> }, ].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <FitnessCenterIcon/> : <StarsIcon/>  }</ListItemIcon> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>) : (null)}

        {Goals ? (<List component="nav" aria-label="pages2">
          {[ { text: 'Goals', url: '/goals', icon: <StarsIcon /> }].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <FitnessCenterIcon/> : <StarsIcon/>  }</ListItemIcon> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>) : (null)}

        <Divider />

        <List component="nav" aria-label="pages3">
          {[{ text: 'Screentime', url: '/screentime', icon: <ImportantDevicesIcon /> }].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <ImportantDevicesIcon/> : <AttachMoneyIcon />}</ListItemIcon> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>


        <List component="nav" aria-label="pages3">
          {[{ text: 'Budget', url: '/budget', icon: <AttachMoneyIcon /> }].map((item, index) => (
            <Link href={item.url}>
              <ListItem button key={item.text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <ImportantDevicesIcon/> : <AttachMoneyIcon />}</ListItemIcon> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
          <ListItem button onClick={handleClick} styles={"position: fixed bottom: 0 textAlign: center paddingBottom: 1"}>
            <Typography>Sign Out</Typography>
          </ListItem>
        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div >
  );
}

