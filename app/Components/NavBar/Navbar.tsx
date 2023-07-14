'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import logo from '../../../public/img/logo.webp';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
const Navbars = () => {
  return (
    <>
      <Navbar expand="sm" className=" mb-3 p-4 shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" href={'/'}>
              <Image src={logo} alt="logo.webp" width={150} height={50} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Digi Dolphins
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link me-lg-4" href="/">
                  Home
                </Link>
                <Link className="nav-link me-lg-4" href="/">
                  About Us
                </Link>

                <NavDropdown
                  title="Features"
                  id="offcanvasNavbarDropdown-expand-sm"
                  className="me-lg-4"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Birthday Gifts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Beauty Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Gifts for her
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Gifts for him
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Gifts for all occasions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Personalized Gifts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Surprise with an event
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  className="nav-link me-lg-4"
                  href="https://my-personal-blogs.vercel.app/"
                  target="_blank"
                >
                  Blog
                </Link>
                <Button className="p-2">Get Started</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
