import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo2.png';
import Text from '../assets/images/text-logo.png';
import pdf from '../whitepaper/Whitepaper.pdf';


const Navigation =()=>{
    return(
        <div className='container'>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="navbarBg">
            <Container className="logo-className">
                <Navbar.Brand href="#" id="logo-heading"><img src={Logo} /><img className='text-logo' src={Text} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto links">
                        <Nav.Link className="nav-items text-nowrap" href="#header-container">HOME</Nav.Link>
                        <Nav.Link className="nav-items text-nowrap" href="#tokenomics">TOKENOMICS</Nav.Link>
                        <Nav.Link className="nav-items text-nowrap" href="#roadmap">ROADMAP</Nav.Link>
                        <Nav.Link className="nav-items text-nowrap" href="#KYC">AUDIT & KYC</Nav.Link>
                        <Nav.Link className="nav-items text-nowrap" href={pdf} target="_blank" rel="noopener noreferrer">WHITEPAPER</Nav.Link>
                        <Nav.Link className="nav-items text-nowrap" href="#faq-section">FAQ's</Nav.Link>
                        <Nav.Link id='mobile-swap' className="nav-items" href="https://www.pinksale.finance/launchpad/0x55b29b6C4921F0506dE892d4E0BcAE7992df127F?chain=BSC" target="_blank" rel="noopener noreferrer">BUY PRESALE</Nav.Link>
                </Nav>



                </Navbar.Collapse>
            </Container>

                <div className="nav-btn">
                    <a href='https://www.pinksale.finance/launchpad/0x55b29b6C4921F0506dE892d4E0BcAE7992df127F?chain=BSC' target="_blank" rel="noopener noreferrer"><button>BUY PRESALE</button></a>
                </div>

        </Navbar>
        </div>
    );
}

export default Navigation;