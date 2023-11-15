import News from './News';
import './App.css'
import { Container, Grid, Button, AppBar, Toolbar, Typography, } from '@mui/material';
import { signout} from './service/ApiService'

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

  let addNewsButton = (
    <Grid container style={{marginTop: 20}}>
            <Grid xs={1} md= {1} item>
                <Button fullWidth style={{height: '100%'}} color="secondary">기사쓰기</Button>
            </Grid>
    </Grid>
  );

  return (
    <>
      {navigationBar}
      {localStorage.getItem("ACCESS_TOKEN") ? addNewsButton : ""}
      <Container maxWidth="md">
        <News />
      </Container>
    </>
  )
}

export default App
