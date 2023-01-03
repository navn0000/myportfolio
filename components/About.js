import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/aboutme.module.css'
import profilePicture from '../public/assests/about.jpeg'
import {IoIosArrowRoundForward } from 'react-icons/io'

function About() {
  return (
    <div className={styles.aboutContainer} >
      <Container fluid>
       <Container>
        <div id="about">
       <h1>About me</h1>
          <Card>
          <div className={styles.aboutme}>
            <div className='text-center'>
                <Image src={profilePicture} />
            </div>
            <div className='mt-3'>
            <h6>Naveenkumar Ramkumar</h6>
            <h6>Front-End-Developer</h6>
            <h3>naveenkumar.bndar@gmail.com | linked in | twitter | Instagram</h3>

              </div>            
              <p>Diligent front-end-developer with 1+ years of experience in ecommerce application and web development.
              I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
             In previous roles, slashed downtime by 25% and ensured 98% on-time project completion.</p>
              <h2>Know More <IoIosArrowRoundForward /></h2>
            
          </div>
          </Card>
          </div>
       </Container>
       
      </Container>
    </div>
  )
}

export default About
