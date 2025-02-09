import React from "react";
import Links from "./Links";


//function About() {
  function About(props){
    const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {props.bio}</p>
      {bio ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {props.github} linkedin = {props.linkedin}/>
      <h3>Links</h3>
      {/* <a href {user.github}></a> */}
    </div>
  )};
//}


export default About;
