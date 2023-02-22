import {Grid} from '@mui/material';
import Navbar from '../../Navbar/Navbar';
import WideoWrapper from '../../WideoWrapper/VideoWrapper';

const Home = () => {
    return ( 
    <Grid container>
        <Navbar/>
        <Grid item><WideoWrapper/></Grid>
    </Grid>
     );
}
 
export default Home;