import { useEffect, useState } from 'react'
import MainRouter from './MainRouter'
import { jwtDecode } from 'jwt-decode'
import { removeAuthToken, setAxiosAuthToken } from './utils/attachHeaders'
import Habit from './components/Habit/Habit2'

// import React from 'react';
// import { Button, ConfigProvider, Flex } from 'antd';
// import { useResponsive } from 'antd-style';

function App() {
    const [user, setUser] = useState(null)

    //  const { xxl } = useResponsive();

    useEffect(() => {
        const jwt = window.localStorage.getItem('proJwt')
        const currentUser = jwt ? jwtDecode(jwt) : null

        if (currentUser && currentUser.exp > (Date.now() / 1000)) {
            setAxiosAuthToken(jwt)
            setUser({
                id: currentUser.id,
                username: currentUser.username,
                email: currentUser.email
            })
        }

    }, [])

    const handleLogin = (user) => {
        setUser(user)

    }

    const handleLogout = () => {
        setUser(null)
        window.localStorage.removeItem('proJwt')
        removeAuthToken()
    }

    return (


        <MainRouter user={user}
         handleLogout={handleLogout}
          handleLogin={handleLogin}
           />





 
//   <>
//      <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
//       <Flex vertical gap="small">
       
//         <Flex gap="small" wrap>
//           <Button color="primary" variant="solid">
//             Solid
//           </Button>
//           <Button color="primary" variant="outlined">
//             Outlined
//           </Button>
//           <Button color="primary" variant="dashed">
//             Dashed
//           </Button>
//           <Button color="primary" variant="filled">
//             Filled
//           </Button>
          
//         </Flex>
      
//         <Flex gap="small" wrap>
//           <Button color="pink" variant="solid">
//             Solid
//           </Button>
//           <Button color="pink" variant="outlined">
//             Outlined
//           </Button>
//           <Button color="pink" variant="dashed">
//             Dashed
//           </Button>
//           <Button color="pink" variant="filled">
//             Filled
//           </Button>
         
//         </Flex>
//         <Flex gap="small" wrap>
//           <Button color="purple" variant="solid">
//             Solid
//           </Button>
//           <Button color="purple" variant="outlined">
//             Outlined
//           </Button>
//           <Button color="purple" variant="dashed">
//             Dashed
//           </Button>
//           <Button color="purple" variant="filled">
//             Filled
//           </Button>
          
//         </Flex>
//         <Flex gap="small" wrap>
//           <Button color="cyan" variant="solid">
//             Solid
//           </Button>
//           <Button color="cyan" variant="outlined">
//             Outlined
//           </Button>
//           <Button color="cyan" variant="dashed">
//             Dashed
//           </Button>
//           <Button color="cyan" variant="filled">
//             Filled
//           </Button>
        
//         </Flex>
//       </Flex>
//     </ConfigProvider>
//     </> 


  );
};




    

export default App