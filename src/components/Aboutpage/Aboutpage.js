import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Aboutpage/Text'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={10} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <span></span>
                        <Text />

                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>ReactJS</li>
                                    <li>Python(Flask)</li>
                                    <li>NodeJS(Express)</li>
                                </Col>
                                <Col md={5}>
                                    <li>PostgreSQL</li>
                                    <li>Redux Js</li>
                                    <li>MYSQL</li>
                                    <li>LINUX(Debian)</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage