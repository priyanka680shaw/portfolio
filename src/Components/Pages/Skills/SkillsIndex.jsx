import { NavbarIndex } from "../../Header/Navbar/NavbarIndex";
export const SkillsIndex = () => {
  return (
   <>
      <NavbarIndex/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white text-center p-4">Skills</h1>
      <div className="grid grid-cols-2 gap-4">
        <SkillCard skill="HTML" />
        <SkillCard skill="CSS" />
        <SkillCard skill="JavaScript" />
        <SkillCard skill="Bootstrap" />
        <SkillCard skill="DSA (Data Structures & Algorithms)" />
        <SkillCard skill="Tailwind CSS" />
        <SkillCard skill="ReactJS" />
        <SkillCard skill="Figma" />
        <SkillCard skill="jQuery" />
      </div>
    </div>
  );

  
   </>
  )
}



const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{skill}</h2>
      {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p> */}
    </div>
  );
};