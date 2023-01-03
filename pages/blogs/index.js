import React from 'react'
import { Card, Container } from 'react-bootstrap'
import styles from '../../styles/know.module.css'
import {IoIosArrowRoundForward } from 'react-icons/io'


function KnowMe() {
  return (
    <div className={styles.containerOuter}>
                        <h1>Blogs</h1>

      <Container fluid>
        <div id='about' className={styles.myContainer}>
            <Container>
                <Card className={styles.cardOuter}>
                    <Card.Body>
                       <p>Yet to come</p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      </Container>
    </div>
  )
}

export default KnowMe
