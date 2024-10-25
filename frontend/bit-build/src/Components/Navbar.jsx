import React from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';

export const settings = [
  {
    name: 'My Profile',
    link: 'frontend/user-profile',
    icon: <IoPersonCircleOutline />,
  },
  {
    name: 'Study Material',
    link: 'frontend/study-material',
    icon: <MdOutlineLibraryBooks />,
  },
];

const TempNavbar = () => {
  


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className="top-0 w-full fixed z-50 ">
        <div className="relative z-50 ">
          <div className="max-w-full mx-[20px] md:mx-[20px] lg:mx-[50px]  sm:px-2 lg:px-4 xl:px-8  bg-white sm:shadow-xl rounded-2xl mt-2 ">
            <div className="flex items-center justify-between h-16 pl-2   ">
              <div className="brand">
                <Link to="/" onClick={scrollToTop}>
                  <img
                    className="w-12 h-12"
                    src="https://cdn-icons-png.flaticon.com/256/4785/4785872.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nav-items flex items-center ">
                <div className="hidden lg:flex lg:justify-center ">
                  <div className=" flex  space-x-5 xl:space-x-[57px]">
                    <div className="each-item pt-3">
                      <Link
                        to="/analyzer"
                        onClick={scrollToTop}
                        className=" hover:text-[#1F2937] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                      >
                        Analysis
                      </Link>
                    </div>
                    <div className="each-item">
                      <Link
                        to="/detect"
                        className="flex relative py-3 hover:text-[#1F2937] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                       
                      >
                        <div className="mr-1">Chip Prediction</div>
                        <div className="pt-[6px]">
                         
                        </div>
                        
                      </Link>
                    </div>
                    <div className="each-item ">
                      <Link
                        to="/nutrients"
                        className="flex relative py-3 hover:text-[#1F2937] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                       
                      >
                        <div className="mr-1">Nutrient Analyzer</div>
                        <div className="pt-[6px]">
                          
                        </div>
                        
                      </Link>
                    </div>
                    <div className="each-item pt-3">
                      <Link
                        to="/hazard"
                        className=" hover:text-[#1F2937] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                      >
                        Disease Predictor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="each-item flex justify-center items-center  space-x-4 lg:space-x-2  xl:space-x-6 pr-2">
                <div className="flex justify-center items-center">
                
                  
    
                </div>
                    
                
               
              </div>
            </div>
            
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default TempNavbar;