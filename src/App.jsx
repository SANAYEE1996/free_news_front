import News from './News';
import './App.css'
import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography, } from '@mui/material';
import {call, signin, signout} from './service/ApiService'
import Login from './Login';

function App() {

  let navigationBar = (
    <AppBar position='static'>
      <Toolbar>
        <Grid justifyContent='space-between' container>
          <Grid item>
            <Typography variant='h6'>news list</Typography>
          </Grid>
        </Grid>
        <Grid item>
          {localStorage.getItem("ACCESS_TOKEN") ? <Button color='inherit' onClick={signout}>LogOut</Button> : <a style={{color: 'white'}} href='/login'>Login</a> }
          
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      {navigationBar}
      <Container maxWidth="md">
        <News />
      </Container>
    </>
  )
}

export default App
