import downArrow from "../../assets/images/icons/arrow-down.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Quote from "./qoute";
import introPic from "../../assets/images/intro.png";


const Home = () => {

  
  useEffect(() => {

  }, []);


  

  return (
    <>
      {/* Hero Section */}
      <div className=" w-screen justify-center header h-lvh mx-auto flex-column pt-44 justify-center items-center text-center">
        <div className="*:mb-5">
          <h1 className="text-zinc-700">
            Welcome to <br />
            AsciiNomads
          </h1>
          <h4 className="text-zinc-400">
            Asciinomads: Building The Futute, One Character a Time
          </h4>
          <br />
          <button className="bg-white *:text-black *:px-10">
            <Link to="/about">Learn more</Link>
          </button>
        </div>
        <div className="w-screen justify-center items-center content-center flex h-44">
          <div className="rounded-full bg-white w-10 h-10">
            <a href="#intro"><img src={downArrow} alt="" className="w-6 mx-auto mt-2"  /></a>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      {/*  Cards Section  */}
      <div className="bg-blue-600 px-10 md:px-16  relative"  id="intro">
      <div className="bg-blue-600 h-24 -rotate-1 w-[110%] right-0 -top-5 absolute"></div>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="justify-start mt-20 text-sm w-82">
            <h1>introduction</h1>
            <h2 className="my-8 text-zinc-300">Explore the range of programming services we offer</h2>
            <h1>short introduction</h1>
            <h2 className="my-8 text-zinc-300">(values ​​and benefits) Lorem ipsum dolor sit amet consectetur. Platea non sit libero fames metus a nullam. Nunc consequat at morbi in egestas. Adipiscing nam posuere fermentum neque diam. Mi ullamcorper molestie sodales tempus nunc nisi imperdiet mauris nisl. Non ultricies massa sem risus neque fames. Nunc rutrum .</h2>
            <h1>Our Values</h1>
            <h2 className="my-8 text-zinc-300">(values ​​and benefits) Lorem ipsum dolor sit amet consectetur. Platea non sit libero fames metus a nullam. Nunc consequat at morbi in egestas. Adipiscing nam posuere fermentum neque diam. Mi ullamcorper molestie sodales tempus nunc nisi imperdiet mauris nisl. Non ultricies massa sem risus neque fames. Nunc rutrum .</h2>
            <h1>Benefits</h1>
            <h2 className="my-8 text-zinc-300">(values ​​and benefits) Lorem ipsum dolor sit amet consectetur. Platea non sit libero fames metus a nullam. Nunc consequat at morbi in egestas. Adipiscing nam posuere fermentum neque diam. Mi ullamcorper molestie sodales tempus nunc nisi imperdiet mauris nisl. Non ultricies massa sem risus neque fames. Nunc rutrum .</h2>
           
          </div>
          <div className="flex jutify-center items-center">
            <img src={introPic} alt="" className="mt-20 md:w-[300vh]" />
          </div>
        </div>
      </div>
        <div className="h-5/6 bg-white relative pt-32">
          <div className="bg-blue-600 h-24 -rotate-1 w-[110%] right-0 -top-5 absolute"></div>
        {/* Cards Section */}
<div className="w-screen md:px-32 px-10 relative flex-column md:flex md:space-x-10 items-center *:mb-6 py-10">
  {/* Card One */}
  <div className="bg-zinc-100 rounded-lg flex-column items-left p-3 z-10 shadow-md text-black">
    <div className="bg-white rounded h-8 w-8 shadow justify-center items-center flex text-2xl p-5">
      1
    </div>
    <h2 className="text-2xl mt-3">Expertise</h2>
    <p className="text-zinc-600 text-sm mt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident aspernatur harum fugit ratione totam dolores nobis itaque corporis sint reiciendis cum commodi sunt nostrum voluptates laboriosam, autem necessitatibus soluta!
    </p>
  </div>

  {/* Card Two */}
  <div className="bg-zinc-100 rounded-lg flex-column items-left p-3 z-10 shadow-md text-black">
    <div className="bg-white rounded h-8 w-8 shadow justify-center items-center flex text-2xl p-5">
      2
    </div>
    <h2 className="text-2xl mt-3">Mission</h2>
    <p className="text-zinc-600 text-sm mt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident aspernatur harum fugit ratione totam dolores nobis itaque corporis sint reiciendis cum commodi sunt nostrum voluptates laboriosam, autem necessitatibus soluta!
    </p>
  </div>

  {/* Card Three */}
  <div className="bg-zinc-100 rounded-lg flex-column items-left p-3 z-10 shadow-md text-black">
    <div className="bg-white rounded h-8 w-8 shadow justify-center items-center flex text-2xl p-5">
      3
    </div>
    <h2 className="text-2xl mt-3">Values</h2>
    <p className="text-zinc-600 text-sm mt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident aspernatur harum fugit ratione totam dolores nobis itaque corporis sint reiciendis cum commodi sunt nostrum voluptates laboriosam, autem necessitatibus soluta!
    </p>
  </div>
</div>

{/* Our Services Section */}
        </div>
    </>
  );
};

export default Home;
