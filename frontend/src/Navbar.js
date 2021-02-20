import { Navbar, Nav } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" className="m-auto" style={{paddingLeft: "30%", paddingRight:"20%"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Valentine's Gift</Nav.Link>
                    <Nav.Link href="#link">Watches</Nav.Link>
                    <Nav.Link href="#link">jewellery</Nav.Link>
                    <Nav.Link href="#link">Watch Bands</Nav.Link>
                    <Nav.Link href="#link">Collections</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <Nav.Link href="#link">Instagram</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent