
import Image from 'next/image';
import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/projects.module.css';
import {IoIosArrowRoundForward } from 'react-icons/io'
function Projects() {
  return (
    <div className={styles.projectContainer}>
      <Container fluid>
        <Container>
            <div className={styles.projectBody} id='project'>
            <h1>Projects</h1>
            <Row>
                <Col md={3}>
                <Card className={styles.cardContainer}>
                <Card.Body>
                  <h6>Slaylewks</h6>
                  <p>Front-end-platform - React JS</p>
                  <h3>Know more <IoIosArrowRoundForward /></h3>
                </Card.Body>
               </Card>
                </Col>
                <Col md={3}>
                <Card className={styles.cardContainer}>
                <Card.Body>
                  <h6>Alta-Trade</h6>
                  <p>Front-end-platform - React JS</p>
                  <h3>Know more <IoIosArrowRoundForward /></h3>
                </Card.Body>
               </Card>
                </Col>
                <Col md={3}>
                <Card className={styles.cardContainer}>
                <Card.Body>
                  <h6>NCSM</h6>
                  <p>Front-end-platform - Html & CSS3</p>
                  <h3>Know more <IoIosArrowRoundForward /></h3>
                </Card.Body>
               </Card>
                </Col>
                <Col md={3}>
                <Card className={styles.cardContainer}>
                <Card.Body>
                  <h6>Portfolio</h6>
                  <p>Front-end-platform - Next JS & React JS</p>
                   <h3>Know more <IoIosArrowRoundForward /></h3>
                </Card.Body>
               </Card>
                </Col>
            </Row>
               
            </div> 
        </Container>
      </Container>
    </div>
  )
}

export default Projects
