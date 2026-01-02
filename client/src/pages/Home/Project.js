import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function Project() {
  const {portfolioData} = useSelector((state)  => state.root);
  const {project} = portfolioData;
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  console.log (project)
  return (
    <div>
      <SectionTitle title="PROJECT" />
      <div className="flex  justify-evenly py-10 gap- sm:flex-col">
        <div className="flex flex-col border-l-2 border-blue-500 gap-7 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {/* period */}

          {project.map((project, index) => (
            <div
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-2xl px-9
              ${
                selectedItemIndex === index
                  ? "text-tertiary font-semibold border-l-4 border-tertiary -ml-[2px] bg-[#348ab57d] py-3 sm:w-auto"
                  : "text-white font-semibold"
              }
                 `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center  sm:flex-col">
          <img
            src={project[selectedItemIndex].image}
            alt="roshan"
            className="w-40 h-40 "
          />
        </div>

        <div className="flex flex-col gap-6">
          {/* content */}
          <h1 className="text-secondry text-5xl font-semibold">
            {project[selectedItemIndex].title}
          </h1>
          <p className="text-green-800 font-bold text-3xl">
            {project[selectedItemIndex].description}
          </p>
          <p className="text-green-800 font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            quasi dignissimos, ipsam fugit ratione reprehenderit dolores tenetur
            voluptate rerum quia?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
