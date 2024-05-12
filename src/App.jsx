// !!!!!!!!!!!!!!!!!!!!   importing all the pages components   !!!!!!!!!!!!!!!!!!!!
import { HomeIndex } from "./Components/Pages/Home/HomeIndex"
import { ContactIndex } from "./Components/Pages/Contact/ContactIndex"
import { SkillsIndex } from "./Components/Pages/Skills/SkillsIndex"
import { PortfolioIndex } from "./Components/Pages/Portfoilo/PortfolioIndex"
import { ResumeIndex } from "./Components/Pages/Resume/ResumeIndex"
import { AboutIndex } from "./Components/Pages/About/AboutIndex"
import { NavbarIndex } from "./Components/Header/Navbar/NavbarIndex"
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Particals from "./Components/Utils/Particals"
 import Particles from "react-tsparticles";
import { useCallback } from "react"
import { loadFull } from "tsparticles";
function App() {

const routs = createBrowserRouter([
  {
    path : "/",
    element : <NavbarIndex/>
  },

  {
    path : "/home",
    Component : HomeIndex,
  },

  {
      path : "/about",
      element : <AboutIndex/>
  },

  {
    path : "/resume",
    element  : <ResumeIndex/>
  },

  {
    path : "/skills",
    element : <SkillsIndex/>
  },

  {
    path : "/portfolio",
    element  : <PortfolioIndex/>
  },

  {
    path :"/contact",
    element : <ContactIndex/>
  }

])

// const particlesInit = useCallback(async engine => {
//   console.log(engine);
//   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   // starting from v2 you can add only the features you need reducing the bundle size
//   await loadFull(engine);
//   // await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//   await console.log(container);
// }, []);


  return (
   <>
        {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
          <RouterProvider router ={routs}></RouterProvider>
   </>
  )
}

export default App
