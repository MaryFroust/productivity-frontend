   import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../utils/Axios';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, username, password, confirmPassword } = formData;
    
    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    try {
      await Axios.post('/users/signup', { firstName, lastName, username, password });
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleOnSubmit}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              borderRadius: 2
            }}
          >
            Create Account
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignUp;









// import  { useState } from 'react'
// import { isAlpha, isAlphanumeric } from 'validator'
// import axios from 'axios'
// import isEmail from 'validator/lib/isEmail'


// function SignUp() {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     const handleOnSubmit = async (event) => {
//         event.preventDefault()
//         const newErrors = {}
//         if (!firstName) {
//             newErrors.firstNameError = 'First name must have a value'
//         } else if (!isAlpha(firstName)) {
//             newErrors.firstNameError = 'First name must be alphabetical'
//         }
//         if (!lastName) {
//             newErrors.lastNameError = 'Last name must have a value'
//         } else if (!isAlpha(lastName)) {
//             newErrors.lastNameError = 'Last name must be alphabetical'
//         }
//         if (!email) {
//             newErrors.emailError = 'Email must have a value'
//         } else if (!isEmail(email)) {
//             newErrors.emailError = 'Email must be a valid email'
//         }
//         if (!username) {
//             newErrors.usernameError = 'Username must have a value'
//         } else if (!isAlphanumeric(username)) {
//             newErrors.usernameError = 'Username must be alphabetical'
//         }
//         if (!password) {
//             newErrors.passwordError = 'Password name must have a value'
//         } else if (password.length < 8) {
//             newErrors.passwordError = 'Password must be at least 8 characters long'
//         }
//         if (!confirmPassword) {
//             newErrors.confirmPasswordError = 'Must confirm password'
//         } else if (confirmPassword !== password) {
//             newErrors.confirmPasswordError = "Passwords don't match."
//         }
//         setErrors(newErrors)
//         if (Object.keys(errors).length === 0) {
          
//             try {
//                 const response = await axios.post('http://localhost:3000/api/users/signup', {
//                     firstName,
//                     lastName,
//                     email,
//                     username,
//                     password
//                 })
//                 console.log(response.data.token)
//                 setFirstName,
//                 setLastName,
//                 setEmail,
//                 setUsername,
//                 setPassword
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }

//     return (
//         <div className="container">
//             <div className="form-text">Sign up</div>
//             <div className="form-div">
//                 <form className="form" onSubmit={handleOnSubmit}>
//                     <div className="form-group-inline">
//                         <div className="inline-container">
//                             <label htmlFor="firstName">First Name</label>
//                             <input
//                                 type="text"
//                                 id="firstName"
//                                 placeholder='First Name'
//                                 name="firstName"
//                                 onChange={e => setFirstName(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.firstNameError}
//                             </div>
//                         </div>
//                         <div className="inline-container">
//                             <label htmlFor="lastName">Last Name</label>
//                             <input
//                                 type="text"
//                                 id="lastName"
//                                 placeholder='Last Name'
//                                 name="lastName"
//                                 onChange={e => setLastName(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.lastNameError}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group-block">
//                         <div className="block-container">
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 type="text"
//                                 id="email"
//                                 name="email"
//                                 placeholder='Email'
//                                 onChange={e => setEmail(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.emailError}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group-block">
//                         <div className="block-container">
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 placeholder='Username'
//                                 name="username"
//                                 onChange={e => setUsername(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.usernameError}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group-block">
//                         <div className="block-container">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 placeholder='Password'
//                                 name="password"
//                                 onChange={e => setPassword(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.passwordError}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group-block">
//                         <div className="block-container">
//                             <label htmlFor="confirmPassword">Confirm Password</label>
//                             <input
//                                 type="password"
//                                 id="confirmPassword"
//                                 placeholder='Confirm Password'
//                                 name="confirmPassword"
//                                 onChange={e => setConfirmPassword(e.target.value)}
//                             />
//                             <div className='errorMessage'>
//                                 {errors.confirmPasswordError}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="button-container">
//                         <button type="submit" >Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default SignUp