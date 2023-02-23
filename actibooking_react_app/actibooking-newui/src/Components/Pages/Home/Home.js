import Navbar from '../../Navbar/Navbar';
import WideoWrapper from '../../WideoWrapper/VideoWrapper';

const Home = () => {
    return ( 
        <>
        <Navbar loggedIn={false} />
        <WideoWrapper />
        </>
     );
}
 
export default Home;