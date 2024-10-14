import React from 'react'

const First = () => {
  return (
    <div className="m-0 p-0 w-full overflow-x-hidden xl:px-24 bg-custom-gradient  max-w-full px-4 pt-12 pb-6 bg-[#1F2937] ">
      <div className="flex justify-center">
        <div className="bg-[#F9F5FF]   px-12 py-[4px] rounded-full text-center mt-16">
          <a href="/frontend" className="text-[#1F2937] font-inter ">
            Home
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 space-y-3">
        <div className="text-white text-[35px] font-semibold font-manrope text-center">
          The Ultimate Food Detection Kit
        </div>
        <div className=" hidden md:block text-white text-[15px] font-inter w-[60%] text-center">
        Master food safety with cutting-edge AI-powered detection, offering real-time analysis of harmful chemicals, ingredient breakdown, and safety insights. Leverage advanced image recognition and data analysis to ensure the quality and safety of your food items for healthier choices every day.
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="flex flex-col space-y-4  md:flex-row md:space-x-[44px] md:space-y-0 justify-center mt-12 items-center">
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#DFD6F4] w-fit ">
            <a href="/analyzer" className="text-[#6941C6] font-inter ">
              Ingredient Analysis
            </a>
          </div>
          <div className="   px-4   py-[4px] rounded-xl text-center bg-[#CAF2DE] w-fit">
            <a href="/predict" className="text-[#00692A] font-inter ">
              Chip Prediction
            </a>
          </div>
          <div className="md:hidden xl:block px-4   py-[4px] rounded-xl text-center bg-[#F7D8D6] w-fit">
            <a href="/Nutrient Analyzer" className="text-[#C54330] font-inter ">
              Nutrient Analyzer
            </a>
          </div>
        </div>
        <div className="hidden  md:flex md:justify-center md:items-center xl:hidden px-4  py-0 md:py-[4px] xl:py-0 rounded-xl text-center bg-[#F7D8D6] w-fit">
          <a href="/frontend" className="text-[#C54330] font-inter ">
            Disease Prediction
          </a>
        </div>
        <div className="flex flex-col space-y-4  md:flex-row justify-center items-center md:space-x-[44px] md:space-y-0 ">
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#D3DCFB] w-fit">
            <a href="/frontend" className="text-[#3049A2] font-inter ">
              Rating Food Security
            </a>
          </div>
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#FAE395] w-fit">
            <a href="/frontend" className="text-[#836600] font-inter ">
              Ingredient Detection{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:space-x-2 mt-16 justify-center items-center mb-7 ml-3 sm:ml-9 text-center md:ml-0">
        <div className="hidden md:block w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo="
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://m.media-amazon.com/images/I/61WBjhjwMjL._AC_UF1000,1000_QL80_.jpg"
            alt=""
          />
        </div>
        <div className="hidden md:block w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://www.usatoday.com/gcdn/-mm-/1637044d22191b9453b9c17456ea74428fd3761d/c=299-0-1067-768/local/-/media/2021/05/08/USATODAY/usatsports/imageForEntry35-1sQ.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default First