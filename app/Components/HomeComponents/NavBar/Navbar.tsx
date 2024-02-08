'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import styles from './navbar.module.css';
const Navbars = () => {
  return (
    <>
      <header>
        {/* <Navbar expand="sm" className="shadow-sm">
          <Container className="p-2">
            <Navbar.Brand>
              <Link className="nav-link" href={'/'}>
                Digi Dolphin
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
                <Nav className={'justify-content-end flex-grow-1 pe-3'}>
                  <Link className={`${styles.color} nav-link me-lg-4`} href="/">
                    Home
                  </Link>
                  <Link
                    className={`${styles.color} nav-link me-lg-4`}
                    href="/about"
                  >
                    About Us
                  </Link>
                  <Link
                    className={`${styles.color} nav-link me-lg-4`}
                    href="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className={`${styles.color} nav-link me-lg-4`}
                    href="/price"
                  >
                    Pricing
                  </Link>

                  <Link
                    className={`${styles.color} nav-link me-lg-4`}
                    href="https://www.binodbudhathoki.com.np/"
                    target="_blank"
                  >
                    Blog
                  </Link>
                  <button className={`${styles.navBtn}`}>Get Started</button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}

        <Navbar expand="lg" className="shadow-sm">
          <Container className="p-2">
            <Navbar.Brand>
              <Link className="nav-link" href={'/'}>
                Digi Dolphin
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={'justify-content-end flex-grow-1 pe-3'}>
                <Link className={`${styles.color} nav-link me-lg-4`} href="/">
                  Home
                </Link>
                <Link
                  className={`${styles.color} nav-link me-lg-4`}
                  href="/about"
                >
                  About Us
                </Link>
                <Link
                  className={`${styles.color} nav-link me-lg-4`}
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className={`${styles.color} nav-link me-lg-4`}
                  href="/price"
                >
                  Pricing
                </Link>

                <Link
                  className={`${styles.color} nav-link me-lg-4`}
                  href="https://my-personal-blog-binod.vercel.app/"
                  target="_blank"
                >
                  Blog
                </Link>
                <button className={`${styles.navBtn} my-3 my-lg-0`}>
                  Get Started
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navbars;
