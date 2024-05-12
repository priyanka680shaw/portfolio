














import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

export const NavbarIndex = () => {

  const [isOpen, setIsOpen] = useState(false);

  const data = [

    {
      label : "HOME",
      to : "/home"
    },

    {
      label : "SKILLS",
      to : "/skills"
    },

    {
      label : "CONTACT",
      to : "/contact"
    },

  

  ];

  return (
    <>
        <div className="text-[#ffdd40] w-full p-6  bg-[#181818] ">
            <nav>
                <ul className="lg:flex lg:justify-between lg:items-center lg:flex-row flex justify-between items-center ">
                    
                    <IoReorderThreeOutline size={40} className="lg:hidden" onClick={() => setIsOpen(!isOpen)}/>
                    <ul className={`lg:flex lg:items-center ${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center left-0 bg-gray-500 lg:relative lg:flex lg:items-center lg:bg-transparent lg:top-auto lg:left-auto lg:flex-row lg:space-x-6 lg:mt-0`}>
                      {
                        data.map((item , idx)=>{
                          return(
                            <li key={idx} className="ml-8 hover:underline">
                              <NavLink to ={item.to}>
                                {item.label}
                              </NavLink>
                            </li>
                          )
                        })
                      }
                    </ul>
                </ul>
            </nav>
        </div>
    </>
  )
}