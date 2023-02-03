import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
function Navibar(props) {
    const border = {
        borderRight: `1px solid ${props.border}`,
        padding: '0px 12px'
    }
    return (
        <Navbar variant={props.style} expand="lg" style={{paddingTop: '35px', alignItems: 'start'}}>
            <Container className='navCont'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{padding: '0'}}>
                    <Nav className="me-auto" >
                        <Nav.Link href="#home" style={border}>01 : Home</Nav.Link>
                        <Nav.Link href="#wroks" style={border}>02 : Works</Nav.Link>
                        <Nav.Link href="#about" style={border}>03 : About</Nav.Link>
                        <Nav.Link href="#contact" style={border}>04 : Contact</Nav.Link>
                        <Nav.Link href="#comp" style={{padding: '0px 12px'}}>05 : Components</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;