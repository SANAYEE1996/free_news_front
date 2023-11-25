import News from './component/News';
import './App.css'
import { Container, Grid, Button, AppBar, Toolbar, Typography, } from '@mui/material';
import { signout} from './service/ApiService'
import { Link } from "react-router-dom";
import Paint from './component/Paint';

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
          {localStorage.getItem("ACCESS_TOKEN") ? <Button color='inherit' onClick={signout}>LogOut</Button> : <Link style={{color: 'white'}} to='/login'>Login</Link> }
          
        </Grid>
      </Toolbar>
    </AppBar>
  );

  let addNewsButton = (
    <Grid container style={{marginTop: 20}}>
            <Grid xs={1} md= {1} item>
                <Link to='/write/news'>기사 작성</Link>
            </Grid>
    </Grid>
  );

  return (
    <>
      {navigationBar}
      {localStorage.getItem("ACCESS_TOKEN") ? addNewsButton : ""}
      
      <button type="button" class="btn btn-primary">
        Add Tag
      </button>
      &nbsp;
      <button type="button" class="btn btn-warning">
        Link Tag
      </button>
      <Paint name="박영상" email="dudtkd0219@gmail.com" />
      <Container maxWidth="md">
        <News />
      </Container>
    </>
  )
}

export default App
