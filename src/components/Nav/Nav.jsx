
import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for routing
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
  Typography
} from '@mui/material';


import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const drawerWidth = 150;

const Nav = ({
  user,
  handleLogout,
  backgroundColor = '#2c3e50', 
  // hoverColor = '#08fb1cff' 
  hoverColor = '#def646ff' ,
  hoverTextColor = 'black'
}) => {
  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About Us', icon: <InfoIcon />, path: '/about-us' },
    { text: 'Task Manager', icon: <AssignmentIcon />, path: '/tasks' },
    { text: 'Goal Setting', icon: <TrackChangesIcon />, path: '/goals' },
    { text: 'Habit Tracker', icon: <FitnessCenterIcon />, path: '/habits' },

    ...(!user
      ? [
        { text: 'Sign-Up', icon: <PersonAddIcon />, path: '/sign-up' },
        { text: 'Login', icon: <LoginIcon />, path: '/login' },
      ]
      : []),

    ...(user ? [{ text: 'Logout', icon: <LogoutIcon />, action: handleLogout }] : []),
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: 'flex',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: backgroundColor,
          color: 'white',
          paddingTop: 0,
          marginTop: 0,
          top: 0,
          height: '100vh',
          '& .MuiList-root': {
            paddingTop: 0,
            paddingBottom: 0,
          },
          // Style the list item buttons
          '& .MuiListItemButton-root': {
            '&:hover': {
              backgroundColor: hoverColor,
              //  '& .MuiListItemIcon-root': {
              //   color: hoverTextColor,
              // },
              '& .MuiListItemText-primary': {
                color: hoverTextColor,
              }
            },
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '& .MuiListItemIcon-root': {
            color: '#f80b99ff',
            minWidth: '40px',
          },
          '& .MuiListItemText-primary': {
            color: '#89f992ff',
            fontSize: '14px',
          },
          '& .MuiDivider-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            margin: '8px 0',
          }
        },
      }}
    >

      <List sx={{ paddingTop: '8px' }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.action ? (
              <ListItemButton
                onClick={item.action}
                sx={{
                  '&:hover': {
                    backgroundColor: hoverColor,
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  '&:hover': {
                    backgroundColor: hoverColor,
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};


export default Nav;











