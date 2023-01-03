import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/skills.module.css'
import CSS3Logo from '../../public/assests/logcss.jpg';
import JSLogo from '../../public/assests/logojs.jpg';
import RLogo from '../../public/assests/react.jpg';
import NLogo from '../../public/assests/logonext.jpg';
import VLogo from '../../public/assests/vue.jpg';
import Blogo from '../../public/assests/bootstrap.jpg';
import RebLogo from '../../public/assests/LogoreactB.png';
import HtLogo from '../../public/assests/logoht.jpg';


import Image from 'next/image';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <Container fluid>
        <Container>
            <div id='skills'>
               
                    <h1>My Skill Sets</h1>

                    <Row>
                <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                    <Image src={RLogo} />
                    </Card.Body>
                </Card>
                    </Col>
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                        <Image src={NLogo} />
                    </Card.Body>
                </Card>
                    </Col>
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                    <Image src={VLogo} />
                    </Card.Body>
                </Card>
                    </Col>
                    
                   
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                    <Image src={JSLogo} />
                    </Card.Body>
                </Card>
                    </Col>
               
                </Row>
                <Row>
                <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                        <Image src={CSS3Logo} />
                    </Card.Body>
                </Card>
                    </Col>
                  
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                    <Image src={Blogo} />
                    </Card.Body>
                </Card>
                    </Col>
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                        <Image src={RebLogo} />
                    </Card.Body>
                </Card>
                    </Col>
                    <Col md={3} sm={12}>
                    <Card className={styles.skillsBody}>
                    <Card.Body>
                        <Image src={HtLogo} />
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

export default Skills
