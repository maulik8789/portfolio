import React from 'react'
import '../../pages/style.css';
import TypewriterAboutMe from "typewriter-effect";

function Text() {
  return (
    <div style={{ fontSize: "15px" }}>
      <TypewriterAboutMe
      options={{
        strings: [
          "I have completed an 800-hour software engineering course which covered key aspects of front-end web development, back-end web development, databases," +
          "and data structures and algorithms. Modules included learning resources, practice exercises, projects, and career-related coursework.<br><br>" +
          "As a fresher software developer, I am looking for an opportunity to start off my career in the information technology industry in Ontario or British Columbia.<br><br>" +
          "Since November 2018, I have owned a startup called Tangled Restro-Café and served really good food with a team of 11 people." +
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