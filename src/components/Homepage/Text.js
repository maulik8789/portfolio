import React from 'react'
import '../../pages/style.css';
import TypewriterHome from "typewriter-effect";

function Text() {
  return (
    <div style={{ fontSize: "2.0em" }}>
      <TypewriterHome
        id ="home"
        options={{
          strings: [
            "Python Developer", 
            "React JS Developer",
            "Node JS Developer",
            "Full Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  )
}

export default Text