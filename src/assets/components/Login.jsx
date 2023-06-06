import React from "react";

function Login() {
  return (
    <section className="w-full min-h-screen h-fit flex justify-center">
      <div className="max-w-screen-xl w-full min-h-screen h-fit flex items-center justify-center">
        <div className="max-w-md w-full bg-blue-600 min-h-[30rem] h-fit p-5 flex justify-center items-center rounded-lg"> 
          {/* imagen */}
          <div>
            
          </div>
          {/* login, email and password */}
          <form action="submit" className="flex flex-col">
            <div className="flex flex-col w-80">
              <label htmlFor="" className="text-xl text-white font-mono font-semibold" >Email</label>
              <input type="email" className="mt-3 text-lg text-white pl-3 pb-1 h-9  bg-transparent border-b-4 border-blue-400 outline-none focus:border-blue-50 transition-all duration-500 "/>
            </div>
            <div className="flex flex-col w-80 mt-9">
              <label htmlFor="" className="text-xl text-white font-mono font-semibold">
                Password
              </label>
              <input type="password" className="mt-3 text-lg text-white pl-3 pb-1 h-9  bg-transparent border-b-4 border-blue-400 outline-none focus:border-blue-50 transition-all duration-500 "/>
            </div>
            <button className="bg-white mt-5 mr-0 w-28 h-10 self-end text-lg font-mono font-semibold rounded-md outline-none border-none hover:bg-blue-600 transition-all duration-500 hover:text-white">Send</button>
            {/* Login with google or facebook or Ios */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
