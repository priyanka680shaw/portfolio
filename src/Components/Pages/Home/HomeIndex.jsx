import { NavLink, useNavigate } from "react-router-dom"
import { NavbarIndex } from "../../Header/Navbar/NavbarIndex"
import { Animate} from "react-simple-animate";

export const HomeIndex = () => {

  const navigate = useNavigate()
function navigateHanddle(){
  navigate('/contact')
}

  return (
    <>
      <NavbarIndex/>
      <section>
     
        <div className="flex justify-center items-center h-screen flex-col text-white">
       
       
                <h1 className="text-3xl text-center p-4">Hello I am Priyanka Shaw<br/>
          frontend Developer  
          </h1>
          
          <Animate play 
          delay={1}
          start={{
                transform : "translateY(550px)"
            }}>
          <button className="pl-6 pr-6 pt-2 pb-2 hover:bg-[#ffdd40] border-4 hover:border-white border-yellow-400 text-lg font-bold" onClick={navigateHanddle}>Hire me</button>
          </Animate>
        
         
         
        </div>
        
      </section>
    </>
  )
}
