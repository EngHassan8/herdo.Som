import React from "react"
import { Routes , Route } from "react-router-dom" 
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Datials from "./pages/Details"
import Scroll from "./components/Scroll"


function App (){
    return <div>
        <Scroll/>

    <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/details" element={<Datials/>} />
        {/* <Route path="/landingPage" element={<LandingPage/>} /> */}
      

        </Routes>
    </div>
}

export default App