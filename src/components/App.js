import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
console.log(user);

// pass this data down as props to the child component(s) that need it!


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Home color={user.color} name={user.name} city={user.city} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
