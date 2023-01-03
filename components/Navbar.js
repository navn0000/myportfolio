import Image from 'next/image';
import React from 'react'
import Logo from "../public/assests/logo.jpg"
import {Container, Navbar, Nav} from "react-bootstrap";
import styles from '../styles/header.module.css';

function Header() {
  return (
    <div>
      <Navbar bg="" expand="lg" className={styles.header}>
      <Container className={styles.headerContainer}>
        <Navbar.Brand href="/">
            <Image src={Logo} className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.headerLinks}>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
