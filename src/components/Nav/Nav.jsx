
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

// Import icons for your navigation links
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // For Habit Tracker

const drawerWidth = 150; // Define the width of the drawer

const Nav = ({ user, handleLogout }) => {
  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About Us', icon: <InfoIcon />, path: '/about-us' },
    { text: 'Task Manager', icon: <AssignmentIcon />, path: '/tasks' },
    { text: 'Goal Setting', icon: <TrackChangesIcon />, path: '/goals' },
    { text: 'Habit Tracker', icon: <FitnessCenterIcon />, path: '/habits' },
    // Only show login/signup if the user is not logged in
    ...(!user
      ? [
        { text: 'Sign-Up', icon: <PersonAddIcon />, path: '/sign-up' },
        { text: 'Login', icon: <LoginIcon />, path: '/login' },
      ]
      : []),
    // Only show logout if the user is logged in
    ...(user ? [{ text: 'Logout', icon: <LogoutIcon />, action: handleLogout }] : []),
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: 'flex',
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: 
        { width: drawerWidth, boxSizing: 'border-box', color: 'blue'},
      }}
    >



      {/* <Toolbar>

        <Typography
          variant="h6"
          noWrap
          component="div"

          sx={{ */}

            {/* flexGrow: 1, // This makes the Typography take up all available space */}
            {/* textAlign: 'center' // Centers the text within the Toolbar */}
          {/* }} */}
        {/* > */}
          {/* Productivity App */}



        {/* </Typography> */}
      {/* </Toolbar> */}


      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.action ? (
              // For logout, use a button with an onClick handler
              <ListItemButton onClick={item.action}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              // For other items, use a Link for navigation
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Nav;











// import React from 'react'

// function Nav() {
//   return (
//     <div>Nav</div>
//   )
// }

// export default Nav


// import { NavLink } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';

// export default function Nav({ user, handleLogout, movieInput, setMovieInput }) {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position='static'
//         sx={{
//           width: '100vw',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           backgroundColor: 'pink',
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//           {/* Left side - Home */}
//           <Box>
//             <Button
//               component={NavLink}
//               to='/'
//               sx={{ color: 'white', textTransform: 'none' }}
//             >
//               Home
//             </Button>
//           </Box>

{/* <Box>
            <TextField
              onChange={e => setMovieInput(e.target.value)}
              value={movieInput}
              id="standard-basic"
              label="Movie Search"
              variant="standard"
            />
            <Button variant='contained'
              sx={{ backgroundColor: 'white', }}>
              Search
            </Button>
         
         
          </Box> */}


{/* Right side - Auth Buttons */ }


{/* <Box>
            {user ? (
              <>
                <Button component={NavLink}
                 to={'/profile'}
                 sx={{ color: 'white', textTransform: 'none' 

                 }}>
                  {user.username}
                </Button>
                <Button
                  component={NavLink}
                  to='/login'
                  onClick={handleLogout}
                  sx={{ color: 'white', textTransform: 'none' 

                  }} >
                  Logout
                </Button>
              </>
            ) : (
              <>

                <Button
                  component={NavLink}
                  to='/sign-up'
                  sx={{ color: 'white', textTransform: 'none' }}
                >
                  Sign-up
                </Button>
                <Button
                  component={NavLink}
                  to='/login'
                  sx={{ color: 'white', textTransform: 'none' }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}







 */}
