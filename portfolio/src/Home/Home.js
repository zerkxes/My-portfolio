import space from '../assets/images/space.jpg';
import Navibar from '../Navbar/Navibar';
import Typing from './Typing'
function Home() {
    return (
        <div style={{ height: '100vh', backgroundImage: `url(${space})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='container vh-100' style={{ display: 'flex', flexDirection: 'column' }}>
                <Navibar style='dark' border='#fff' />
                <h1 >Hello,<br/>
                    <Typing />
                </h1>
            </div>
        </div>
    );
}

export default Home;