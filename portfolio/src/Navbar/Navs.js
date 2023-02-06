import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navs.css';
function Navs(props) {
    const border = {
        borderRight: `1px solid ${props.border}`,
        padding: '0px 12px',
    }
    return (
        <Navbar variant={props.style} expand="lg" style={{ paddingTop: '35px', alignItems: 'start' }}>
            <Container className='navCont'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ padding: '0' }}>
                    <Nav className="me-auto" >
                        <Link to='/home' style={{ textDecoration: 'none' }}><Nav.Link href="/home" style={border}>01 : Home</Nav.Link></Link>
                        <Link to='/works' style={{ textDecoration: 'none' }}><Nav.Link href="/works" style={border}>02 : Works</Nav.Link></Link>
                        <Link to='/about' style={{textDecoration: 'none'}}><Nav.Link href="/about" style={border}>03 : About</Nav.Link></Link>
                        <Link to='/contact' style={{textDecoration: 'none'}}><Nav.Link href="/contact" style={{ padding: '0px 12px' }}>04 : Contact</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;