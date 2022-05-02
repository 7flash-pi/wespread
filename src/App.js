import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import img1 from './images/accessbility.png'
import img2 from './images/product-launch.png'
import img3 from './images/branding.png'
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <Header />
      <About  src={img1}  info={'Making ur Products accessible'}/>
      <About  src={img2}  info={'platform to launch ur product'}/>
      <About  src={img3}  info={'branding ur product'}/>
      <Contact />



    </div>
  );
}

export default App;
