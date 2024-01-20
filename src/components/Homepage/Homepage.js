import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { motion } from "framer-motion"
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn,
         FaGoodreads
} from "react-icons/fa";
import { SiLeetcode } 
  from "react-icons/si";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Maulik Vaghela</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/maulik8789");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://leetcode.com/maulik8789/");
            }}
              className='socailmediabtn'><SiLeetcode className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/maulik-vaghela-609122111/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/maulikvaghela_");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.goodreads.com/user/show/60570547-maulik-vaghela/");
            }}
              className='socailmediabtn'><FaGoodreads className='icon' /></button>
          </Col>

          <Col md={5}>
          <motion.div
  whileHover={{ scale: 1.2, rotate: 180 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>
            <div className="imagedeveloper">
            
            </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
