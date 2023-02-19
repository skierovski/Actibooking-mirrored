import './App.css';
import {Grid} from '@mui/material'


function App() {
  return (
      <div className='Container'>
        <Grid container>
          <Grid item xs={8} sx={{display: 'flex', justifyContent: 'flex-start'}}>Logo</Grid>
          <Grid items xs={2} sx={{display: 'flex', justifyContent: 'flex-end'}}>Przycisk</Grid>
          <Grid items xs={2} sx={{display: 'flex', justifyContent: 'flex-end'}}>Przycisk</Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>test</Grid>
          <Grid items xs={6}>test</Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>test</Grid>
          <Grid items xs={8}>test</Grid>
        </Grid>
        
      </div>
  );
}

export default App;
