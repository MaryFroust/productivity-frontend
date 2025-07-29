
// import Nav from './Nav/Nav'
// import './Home.css'
import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

function Home() {
  return (
    //  <div className='home-content'> 

    <div className='img-container' style={{ display: 'flex', marginLeft: "10%" }}>

      {/* <div className='img-container'> */}
      
    
      <h1 style={{
        color: "white",
        position: 'absolute',
        marginLeft: "30%",
        marginTop: '10%'
        
      }}>Achieve Your Goals</h1>

      <img src="https://cdn.pixabay.com/photo/2017/08/10/12/44/shape-2622306_1280.jpg" alt="" />

      {/* </div> */}

      <div className='header' style={{
        color: "white",
        position: 'absolute',
        marginLeft: "20%",
        marginTop: '40%'
       
      }}>

        <h3> A powerful productivity app designed to boost your efficiency and focus.</h3>

        {/* <h5 style={{ color: "black" }}> A powerful productivity app designed to boost your efficiency and focus.</h5> */}

        <p></p>
        <p></p>

      </div>
    </div>


  );
}

export default Home;

{/* 
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Productivity App
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar> */}

{/* Hero Section */ }
{/* <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
              Achieve Your Goals, Stay Organized
          </Typography>
          <Typography variant="h5" paragraph>
            A powerful productivity app designed to boost your efficiency and focus.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Start Your Free Trial
          </Button>
        </Container>
      </Box> */}

{/* Basic Content Section (for testing) */ }
{/* <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features (Coming Soon!)
        </Typography>
        <Typography paragraph>
          This is a placeholder for your app's amazing features. You can add more sections here.
        </Typography>
      </Container> */}


