import React from 'react'
import { Container } from 'react-bootstrap'
// import styles from '../../styles/home.module.css'
import { AiFillCaretDown } from 'react-icons/ai'; 

function HomePage() {
  return (
    <div className={styles.homeContainer}>
     <Container fluid>
        <Container>
         <div className={styles.homeContent}>
             <h1>NAVEENKUMAR R</h1>
             <h2>FRONT-END-DEVELOPER</h2>
             <h6>Learn more about what I do</h6>
             <span>
            <AiFillCaretDown />
             </span>
         </div>

        </Container>
     </Container>
    </div>
  )
}

export default HomePage
