import React from 'react'
import { Card, Container } from 'react-bootstrap'
import styles from '../styles/know.module.css'
import {IoIosArrowRoundForward } from 'react-icons/io'


function KnowMe() {
  return (
    <div className={styles.containerOuter}>
                        <h1>About me</h1>

      <Container fluid>
        <div id='about' className={styles.myContainer}>
            <Container>
                <Card className={styles.cardOuter}>
                    <Card.Body>
                        <h4>Naveenkumar Ramkumar</h4>
                        <h4>Front-End-Developer</h4>
                        <h6>naveenkumar.bndar@gmail.com | linked in | twitter | Instagram</h6>
                        <p>Diligent front-end-developer with 1+ years of experience in ecommerce application and web development. I describe myself as a passionate developer who loves coding, open source, and the web platform. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion.</p>
                        <h3>Know more <IoIosArrowRoundForward /></h3>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </Container>
    </div>
  )
}

export default KnowMe
