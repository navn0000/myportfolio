import React from 'react'
import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'
import styles from '../../styles/slaylewks.module.css'

function slaylewks() {
  return (
    <div>
        <Head>
        <title>NaveenKumar | Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="../assests/logo.jpg" />
      </Head>
      <Container>
        <Row>
         <div className={styles.slaylewksContainer}>
            <h1>SLAYLEWKS</h1>
            <h2>About the project</h2>
           
            <p>SLaylewks is a saloon slot booking application for "users". It has multiple logins like "User", "Freelancer", "Business". For users they can book service's like Spa, Hair Cut, etc.. in a respected date and time and they can pay the service cost through online for the service.</p>
            <p>And also they have multiple choice option like shop service and home service</p>
            <p>And also they have a option called bridal for their events they can even request any time for the bridal and the sallon or freelancer accepted the request then they can pay a advance pay and the remaining will pay on the event date.</p>
            <h2>Technologies Used</h2>
            <ul>
                <li>React Js</li>
                <li>Redux</li>
                <li>React Bootstrap</li>
                <li>Node JS</li>
                <li>Express Js</li>
                <li>Mango DB</li>
            </ul>
            <h2>WHAT I DONE IN THIS PROJECT?</h2>
              <p>Worked in the front-end part of this application.</p>
              <p>Designed the entire application using react-bootstrap and some more extra plugins.</p>
              <p>Worked with react framework for this project and also worked in redux for state management in the entire application</p>
         </div>
        </Row>
      </Container>
    </div>
  )
}

export default slaylewks
