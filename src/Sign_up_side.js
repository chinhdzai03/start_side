import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const defaultTheme = createTheme();



export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={0}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={1} square sx={{ display:'flex' ,alignItems: 'center',justifyContent:'center'}}>
          <Box elevation={6}
            sx={{
              border: 1,
              borderRadius: 3,
              borderColor: 'grey.300' ,
              boxShadow: 3,
              width: 320,
              height: 480,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue', ml:3 , mt: 3 }}>
              <ForumRoundedIcon color='' />
            </Avatar>
            <Typography component="h1" variant="subtitle2" sx={{ ml:3, mt:1, fontSize : 14  }}>
                Welcome to Quick Chat App,
               
            </Typography>
            <Typography component="h1" variant="subtitle2" sx={{ml:3 , fontSize : 14}}>
                 Create your account. 
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1   }}>
              <TextField
                sx={{
                  display : 'block',
                  width : 270,
                  height:40,
                  ml:3,
                  }}
                margin="normal"
                // required
                // autoComplete="email"
                fullWidth
                variant='outlined'
                label="Email ID"
                name="email-su"
                autoFocus
              />
              <TextField
                sx={{
                display : 'block',
                width : 270,
                height:40,
                mt : 3,
                ml:3,
                }}
                margin="normal"
                // required
                id="outlined"
                name="password-su"
                label="Password"
                type="password"
                fullWidth
                // autoComplete="current-password"
              />
              <TextField
                sx={{
                display : 'block',
                width : 270,
                height:40,
                mt : 3,
                ml:3,
                }}
                margin="normal"
                // required
                id="outlined"
                name="password-cf-su"
                label="Confirm Password"
                type="password"
                fullWidth
                // autoComplete="current-password"
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' , mt : 2, ml : 3 , mr : 3, alignItems: 'center'}}>    
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 , borderRadius: 1 , display :"inline-block" }}
                  >
                    Sign Up
                  </Button>
              </Box>
                
              
              <Box sx={{borderTop: 1 , borderColor: 'grey.300', ml:3 ,display :'flex' , alignItems: 'center ' , }}>
                <Typography component="h1" variant="subtitle2" sx={{ display :"inline"  }}>
                  Have an account?
                </Typography>
                <Link to="/"> 
                 <Button 
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , ml: 1, borderRadius: 1, display :"inline" , bgcolor: 'grey' }}
                 >
                    Login
                 </Button> 
                </Link>
               
              </Box>

              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}