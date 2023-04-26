import React from 'react'
import '../../pages/style.css';
import TypewriterAboutMe from "typewriter-effect";

function Text() {
  return (
    <div style={{ fontSize: "15px" }}>
      <TypewriterAboutMe
      options={{
        strings: [
          "I have been working with <u><a href='https://www.rogers.com'>Rogers</a></u> for around a year, where I have gained significant experience in developing and maintaining integrated frontend and backend interfaces, conducting quality assurance testing, "+
          "and providing ongoing support and maintenance for software solutions. Additionally, I have experience providing Tier3 support and responding to customer support requirements during regular business hours "+
          "and on a rotating on-call schedule. I am able to work independently and efficiently to meet dynamic customer demand and needs, and I have a positive attitude and provide guidance and motivation to my team.<br><br>"+
          "During my time with <u><a href='https://www.springboard.com'>Sprinboard</a></u>, I have completed an 800-hour software engineering course which covered key aspects of front-end web development, back-end web development, databases," +
          "and data structures and algorithms. Modules included learning resources, practice exercises, projects, and career-related coursework.<br><br>" +
          "As a software developer, I am looking for an opportunity to start off my career in the information technology industry in Ontario or British Columbia.<br><br>" +
          "Since November 2018, I have owned a startup called <u><a href='https://www.google.com/maps/uv?pb=!1s0x395e83c52b99052f%3A0x7caec1297792edd2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMA5kD4lVit1M_QAfQiGwua905zXA1V6WlaVGa7%3Dw266-h200-k-no!5stangled%20ahmedabad%20-%20Google%20Search!15sCgIYIA&imagekey=!1e10!2sAF1QipOoJaEurUdi5gTtkxOcuip5oExWhMKUjyrcuYbi&hl=en&sa=X&ved=2ahUKEwjp2MbXpZL2AhWcFTQIHUgaBxAQoip6BAgtEAM'>Tangled Restro-Café</a></u> "+
          "and served really good food with a team of 11 people." +
          "As my café got shut due to the pandemic, instead of considering it as a problem, I chose to see it as an opportunity to pursue something I love to do, which led me towards software development.<br><br>" +
          "I have been learning coding, since I was in college, and certified with Visual Basics, C and C++. Also, while working full-time in 2016, I got basic knowledge of JavaScript, HTML, SQL and CSS." +
          "Continuing my interest in the same field, I am keen to join the industry to optimize my interest and skill at a growing mid to large scale enterprise."
        ],
        autoStart: true,
        delay: 10,
        loop: false,
        pauseFor: 999999999
      }}
      
    />
    </div>
  )
}

export default Text