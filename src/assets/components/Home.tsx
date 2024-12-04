import downArrow from "../../assets/images/icons/arrow-down.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import introPic from "../../assets/images/intro.png";
import logo from "../../assets/images/basic.svg";
import fLogo from "../../assets/images/footer-logo.png";
import Aos from "aos";



const Card = ({ partnerName, logo, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm 1 h-72  mx-auto">
    <div className="flex justify-center items-center h-20 mb-4">
      <img src={logo} alt={`${partnerName} logo`} className="w-12 h-12 rounded-lg bg-zinc-200 w-full h-24" />
    </div>
    <h3 className="text-xl flex font-bold text-blue-600 mb-2 conthrax">{partnerName}</h3>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);


  const partners = [
    { name: 'Partner 1', logo: '/path/to/logo1.png', description: 'Some placeholder text about Partner 1.' },
    { name: 'Partner 2', logo: '/path/to/logo2.png', description: 'Some placeholder text about Partner 2.' },
    { name: 'Discord', logo: '/path/to/discord-logo.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Partner 4', logo: '/path/to/logo4.png', description: 'Some placeholder text about Partner 4.' },
    { name: 'Partner 5', logo: '/path/to/logo5.png', description: 'Some placeholder text about Partner 5.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + partners.length) % partners.length);
  };


  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setIsLoading(false), 500); // Remove loading after fade-out
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
          {isLoading && (
        <div className={`loading-page bg-white w-screen h-screen z-50 fixed ${fadeOut ? "fade-out" : ""}`}>
          <div className="flex h-screen justify-center items-center">
            <img src={logo} data-aos="zoom-in"  className="h-20" alt="" />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="w-screen justify-center header h-lvh mx-auto flex-column pt-44 justify-center items-center text-center">
      {/* Spline Embed as Background */}
      <div className="spline-container">
        <iframe
          src="https://my.spline.design/globecopy-2308ab93cb9dbb2fcfcd926023f87dc9/" // Replace with your Spline embed URL
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="fullscreen"
        ></iframe>
      </div>

      {/* Main Content */}
      <div className="*:mb-5" data-aos="fade-down" data-aos-delay="2200">
        <h1 className="text-zinc-700 conthrax">
          Welcome to <br />
          AsciiNomads
        </h1>
        <h4 className="text-zinc-400 ">
          Code Beyond The Borders
        </h4>
        <br />
        <button className="bg-white *:text-black hover:border-white hover:border-1 transition-all ease-in-out *:px-10">
          <Link to="/about">Learn more</Link>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="w-screen justify-center items-center content-center flex h-44">
        <div className="rounded-full bg-white w-10 h-10 transition-all ease-in-out hover:scale-125 hover:shadow-xl">
          <a href="#intro">
            <img src={downArrow} alt="Scroll down" className="w-6 mx-auto mt-2" />
          </a>
        </div>
      </div>
    </div>
      {/* Hero Section End */}
      {/*  Cards Section  */}
      <div className="bg-[#085BC1] px-10 md:px-16  relative" id="intro">
        <div className="bg-[#085BC1] h-24 z-10 -rotate-1 w-[110%] right-0 -top-20 absolute"></div>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="justify-start mt-20 text-sm w-82">
          <h1 className="conthrax mt-2">Introduction</h1>
<h2 className="my-8 text-zinc-300">
  Welcome to Asciinomads, where creativity meets innovation in software engineering. We specialize in delivering top-tier programming services tailored to your needs, ensuring every project is efficient, scalable, and impactful.
</h2>
<h1 className="conthrax">Explore the Range of Services We Offer</h1>
<h2 className="my-8 text-zinc-300">
  From custom software development to cutting-edge system designs, Asciinomads is equipped to turn your ideas into reality. Our expertise spans diverse technologies, empowering businesses with tailored solutions.
</h2>
<h1 className="conthrax">Our Values</h1>
<h2 className="my-8 text-zinc-300">
  At Asciinomads, we believe in:  
  <ul>
    <li><strong>Collaboration:</strong> Working together to achieve exceptional results.</li>
    <li><strong>Innovation:</strong> Leveraging the latest technologies to solve complex problems.</li>
    <li><strong>Integrity:</strong> Delivering honest, reliable, and high-quality solutions.</li>
  </ul>
</h2>
<h1 className="conthrax">Benefits</h1>
<h2 className="my-8 text-zinc-300">
  <ul>
    <li><strong>Tailored Solutions:</strong> Custom software designed specifically for your business.</li>
    <li><strong>Future-Proof Technology:</strong> Scalable systems ready to grow with you.</li>
    <li><strong>Seamless Experience:</strong> Transparent processes and clear communication at every step.</li>
  </ul>
</h2>

          </div>
          <div className="flex jutify-center items-center">
            <img src={introPic} alt="" className="mt-20 md:w-[300vh]" />
          </div>
        </div>
      </div>
      <div className="h-5/6 pb-16  bg-white relative pt-32">
        <div className="bg-[#085BC1] h-24 -rotate-1 w-[110%] right-0 -top-5 absolute"></div>
        {/* Cards Section */}
        <div className="w-screen md:px-12 px-10 relative flex-column md:flex md:space-x-10 items-center *:mb-6 py-10">
          {/* Card One */}
          <div className="bg-zinc-100 rounded-lg flex-column items-left p-3 z-10 shadow-md text-black">
            <div
              className=" h-40 w-40 my-5 justify-center items-center flex text-2xl p-5 mx-auto"
              data-aos="zoom-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="348"
                height="452"
                fill="none"
                viewBox="0 0 348 452"
              >
                <path
                  fill="#D9D9D9"
                  fill-rule="evenodd"
                  d="M0 73c0-16.569 13.431-30 30-30h147c16.569 0 30 13.431 30 30v66c0 16.569 13.431 30 30 30h48c16.569 0 30 13.431 30 30v223c0 16.569-13.431 30-30 30H152c-16.569 0-30-13.431-30-30v-99c0-16.569-13.431-30-30-30H30c-16.569 0-30-13.431-30-30V73Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#085BC1"
                  fill-rule="evenodd"
                  d="M33 30C33 13.431 46.431 0 63 0h147c16.569 0 30 13.431 30 30v66c0 16.569 13.431 30 30 30h48c16.569 0 30 13.431 30 30v223c0 16.569-13.431 30-30 30H185c-16.569 0-30-13.431-30-30v-99c0-16.569-13.431-30-30-30H63c-16.569 0-30-13.431-30-30V30Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-2xl mt-3 conthrax">Expertise</h2>
            <p className="text-zinc-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              provident aspernatur harum fugit ratione totam dolores nobis
              itaque corporis sint reiciendis cum commodi sunt nostrum
              voluptates laboriosam, autem necessitatibus soluta!
            </p>
          </div>

          {/* Card Two */}
          <div className="bg-zinc-100 rounded-lg flex-column p-3 z-10 shadow-md text-black">
            {/* <div className="bg-white rounded h-8 w-8 shadow justify-center items-center flex text-2xl p-5">
              2
            </div> */}
            <div
              className=" h-40 w-40 my-5 justify-center items-center flex text-2xl p-5 mx-auto"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="343"
                height="450"
                fill="none"
                viewBox="0 0 343 450"
              >
                <path
                  fill="#D9D9D9"
                  fill-rule="evenodd"
                  d="M0 71c0-16.569 13.431-30 30-30h255c16.569 0 30 13.431 30 30v209c0 16.569-13.431 30-30 30h-48c-16.569 0-30 13.431-30 30v80c0 16.569-13.431 30-30 30H30c-16.569 0-30-13.431-30-30V71Zm157 29c0-16.569-13.431-30-30-30H65c-16.569 0-30 13.431-30 30v99c0 16.569 13.431 30 30 30h62c16.569 0 30-13.431 30-30v-99Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#085BC1"
                  fill-rule="evenodd"
                  d="M28 30C28 13.431 41.431 0 58 0h255c16.569 0 30 13.431 30 30v209c0 16.569-13.431 30-30 30h-48c-16.569 0-30 13.431-30 30v80c0 16.569-13.431 30-30 30H58c-16.569 0-30-13.431-30-30V30Zm157 29c0-16.569-13.431-30-30-30H93c-16.569 0-30 13.431-30 30v99c0 16.569 13.431 30 30 30h62c16.569 0 30-13.431 30-30V59Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl mt-3 conthrax">Mission</h2>
            <p className="text-zinc-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              provident aspernatur harum fugit ratione totam dolores nobis
              itaque corporis sint reiciendis cum commodi sunt nostrum
              voluptates laboriosam, autem necessitatibus soluta!
            </p>
          </div>

          {/* Card Three */}
          <div className="bg-zinc-100 rounded-lg flex-column items-left p-3 z-10 shadow-md text-black">
            {/* <div className="bg-white rounded h-8 w-8 shadow justify-center items-center flex text-2xl p-5">
              3
            </div> */}
            <div
              className=" h-40 w-40 my-5 justify-center items-center flex text-2xl p-5 mx-auto"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="347"
                height="434"
                fill="none"
                viewBox="0 0 347 434"
              >
                <path
                  fill="#D9D9D9"
                  fill-rule="evenodd"
                  d="M94.875 60.562C98.36 42.09 84.193 25 65.395 25H30C13.431 25 0 38.431 0 55v349c0 16.569 13.431 30 30 30h270c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15h-63c-16.569 0-30-13.431-30-30v-80c0-16.569 13.431-30 30-30h48c16.569 0 30-13.431 30-30V55c0-16.569-13.431-30-30-30h-53.582c-18.951 0-33.079 17.469-29.116 36 3.963 18.531-10.166 36-29.116 36H124.19c-18.798 0-32.965-17.09-29.48-35.562l.165-.876Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#085BC1"
                  fill-rule="evenodd"
                  d="M126.875 35.562C130.36 17.09 116.193 0 97.395 0H62C45.431 0 32 13.431 32 30v349c0 16.569 13.431 30 30 30h270c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15h-63c-16.569 0-30-13.431-30-30v-80c0-16.569 13.431-30 30-30h48c16.569 0 30-13.431 30-30V30c0-16.569-13.431-30-30-30h-53.582c-18.951 0-33.079 17.469-29.116 36 3.963 18.531-10.166 36-29.116 36H156.19c-18.798 0-32.965-17.09-29.48-35.562l.165-.876Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl mt-3 conthrax">Values</h2>
            <p className="text-zinc-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              provident aspernatur harum fugit ratione totam dolores nobis
              itaque corporis sint reiciendis cum commodi sunt nostrum
              voluptates laboriosam, autem necessitatibus soluta!
            </p>
          </div>
        </div>

        {/* Our Services Section */}
      </div>
      {/* Partners section */}
  <div className="bg-white partner-sec grid grid-cols-2 w-screen ">
  <div className="col-span-2 lg:col-span-1 md:p-24 p-12">
    <h1 className="text-zinc-900 conthrax">
      Partners
    </h1>
    <p className="text-zinc-700 mt-5">
    Take a look at some of our previous projects to see the quality of our work and the range of programming solutions we offer.
    </p>
  </div>
  <div className="col-span-2 lg:col-span-1 flex justify-center items-center">
    <div className="grid grid-cols-6 items-center gap-3">
      {/* Previous Button */}
      <div className="flex justify-center ">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Card */}
      <div className="flex justify-center col-span-4">
        <Card
          partnerName={partners[currentIndex].name}
          logo={partners[currentIndex].logo}
          description={partners[currentIndex].description}
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
                    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

      {/* partners section close */}
      <div className="h-28 bg-white"></div>
      {/* pre-footer section */}
      <div className="grid grid-cols-2 overflow w-screen">

        <div className="col-span-2 relative mb-3">
          <div className="bg-[#085BC1] w-[100%] h-12 -rotate-1 right-0 -top-5 absolute"></div>
        </div>
      </div>


      <footer className="bg- shadow bg-[#085BC1]">
        <div className="w-full max-w-screen-xl mx-auto p-8 md:py-8">
          <div className="flex md:flex-row flex-col-reverse  items-center md:justify-between justify-center">
           
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 transition all ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 transition all ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={fLogo} className="h-20" alt="Flowbite Logo" />
            </a>
          </div>
          <hr className="my-6 border-white sm:mx-auto opacity-40 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              AsciiNomads™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
