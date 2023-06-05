import React from "react";
import women from "../images/women.png";

function Hero() {
  return (
    <div className="w-full min-h-screen h-fit flex justify-center">
      <div className="max-w-screen-xl w-full lg:flex-row flex-col flex justify-between items-center">
        <div className="md:w-[40rem] md:pr-3 h-full flex flex-col justify-center items-start mt-28 xl:mt-0">
          <h1 className="font-mono sm:text-6xl text-5xl font-semibold">
            Best Place to buy
            <br />
            <span className="font-extrabold text-blue-600">Everything</span>
          </h1>
          
          <p className="font-sans font-light mt-5 md:text-base text-sm ">
            At Uncanny Store you can shop whatever you think at very accesible
            prices, so... What do you think, Let's buy something!!
          </p>

          <button className="bg-blue-600 text-slate-100 p-2 pl-5 pr-5 rounded-md mt-10 md:self-start self-center">
            Shopping Now
          </button>
        </div>

        <div className="w-[35rem] lg:relative max-h-screen hidden lg:block">
          <img src={women} alt="" className="w-96 absolute top-10 left-12" />
          {/* <div>
                <button className="bg-blue-600 text-slate-100 m-1 p-2 pl-5 pr-5 rounded-md absolute top-60 left-80">Start Shopping</button>
            </div> */}
          <div>
            <svg
              className=""
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop
                    id="stop1"
                    stopColor="rgba(222, 197, 166, 1)"
                    offset="0%"
                  ></stop>
                  <stop
                    id="stop2"
                    stopColor="rgba(222, 197, 166, 1)"
                    offset="100%"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient)"
                d="M22.1,-37.9C29.2,-34.2,35.7,-29.3,39.2,-22.8C42.7,-16.3,43.1,-8.1,42.5,-0.3C41.9,7.5,40.4,14.9,37.2,22C34,29,29.2,35.6,22.7,39.9C16.2,44.3,8.1,46.4,0,46.4C-8.2,46.5,-16.4,44.6,-23.5,40.6C-30.5,36.6,-36.4,30.5,-40.4,23.4C-44.4,16.3,-46.4,8.1,-46.3,0.1C-46.1,-8,-43.9,-16,-38.9,-21.4C-34,-26.9,-26.4,-29.7,-19.5,-33.4C-12.5,-37.2,-6.3,-41.8,0.6,-42.9C7.5,-44,15.1,-41.6,22.1,-37.9Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
