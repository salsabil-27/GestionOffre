import React, { useState } from "react";

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex  md:p-2 min-[320px]:text-center max-[600px] bg-gray-100">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-blue-900  h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="../assets/refresh.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open ? "rotate-[360deg] h-15 w-12" : ""
            }`}
          />
          <h1
            className={`text-gray-300  origin-left font-medium text-xl duration-200 ${
              !open ? "scale-0" : ""
            }`}
          >
            SEA ERP
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9 mt-2 ${
              open ? "" : "bg-light-white"
            }`}
          >
            <img className="h-7 w-10" src={`./src/assets/dash.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Dashboard
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9 mt-2 ${
              open ? "bg-light-white" : ""
            }`}
          >
            <img className="h-7 w-10" src={`./src/assets/add.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Ajouter client
            </span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9 mt-2 ${
              open ? "" : "bg-light-white"
            }`}
          >
            <img className="h-7 w-10" src={`./src/assets/clients.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Liste des clients
            </span>
          </li>
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <AddClient />
      </div> */}
    </div>
  );
};

export default SideBar;