import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
  <Container fluid>
    <Navbar.Brand href="#" className='text-white'>Fresh <span className='nav-span'>Blend</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="mx-auto navbar-links text-white" navbarScroll>
        <Nav.Link href="/" className='text-white'>Home</Nav.Link>
        <Nav.Link href="/menu" className='text-white'>Menu</Nav.Link>
        <Nav.Link href="/about" className='text-white'>About</Nav.Link>
        <Nav.Link href="/contact" className='text-white'>Contacts</Nav.Link>
      </Nav>
      <Form className="d-flex btn-contain">
        <Button variant="nav-btn" className='nav-btn'>Sign In</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default NavScrollExample;