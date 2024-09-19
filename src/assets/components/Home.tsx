import truck from "../images/icons/truck-loading.png";
import shop from "../images/icons/shopping-cart.png";
import horn from "../images/icons/party-horn.png";
import handEmoji from "../images/icons/hand.png";
import star from "../images/icons/star2.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Quote from "./qoute";


const Home = () => {

  
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    date: new Date().getDate(),
    month: new Date().getMonth()
  });
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  
  useEffect(() => {

    const tick = () => {
      const now = new Date();
      setTime({
        hour: now.getHours(),
        minutes: now.getMinutes(),
        date: now.getDate(),
        month: now.getMonth()
      });
    };

    // Update the time every second
    const intervalId = setInterval(tick, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="w-screen md:w-3/4 justify-center mx-auto">
        <div className="w-screen justify-center p-2 md:p-10 text-center min-h-screen mt-1 text-white">
          <div className="flex justify-between w-screen mt-5 md:mt-0">
            <h1 className="text-2xl md:text-4xl  text-left  text-orange-100 uppercase  items-center justify-center md:justify-center">
              Welcome back,
              <span className="flex items-center">
                Orlando
                <img
                  src={handEmoji}
                  className="w-8 h-8 md:w-12 md:h-12 ml-2"
                  alt="Hand Emoji"
                />
              </span>
            </h1>
            <h1 className="text-2xl md:text-4xl  text-right  text-orange-100 uppercase  items-center justify-center md:justify-start">
              <span>
                {time.hour.toString().padStart(2, "0")} :{" "}
                {time.minutes.toString().padStart(2, "0")}
              </span>
              <br />
              <span>
                {time.date}
                {months[time.month]}
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center content-center justify-center text-2xl text-orange-500 *:rounded-xl mt-10 ">
            {/* Inventory Link */}
            <Link
              to="/OrlandoTracker/inventory"
              className="col-span-2 home-card flex-col p-4 h-48 bg-zinc-900"
            >
              <div className="">
                <div className="bg-orange-200 rounded-full p-4 w-fit">
                  <img className="w-7" src={truck} alt="Truck Icon" />
                </div>
              </div>
              <p className="mt-3 hover:text-white">Inventory</p>
            </Link>

            {/* Indeed Link */}
            <Link
              to="/OrlandoTracker/indeed"
              className="col-span-1 home-card rounded-lg h-48 p-4"
            >
              <div className="">
                <div className="bg-orange-200 rounded-full p-4 w-fit">
                  <img className="w-7" src={shop} alt="Shop Icon" />
                </div>
              </div>
              <p className="mt-3 text-zinc-900">Indeed</p>
            </Link>

            {/* Events Link */}
            <Link
              to="/OrlandoTracker/events"
              className="col-span-1 home-card rounded-lg h-48 p-4"
            >
              <div className="">
                <div className="bg-orange-200 rounded-full p-4 w-fit">
                  <img className="w-7" src={horn} alt="Horn Icon" />
                </div>
              </div>
              <p className="mt-3 text-zinc-900">Events</p>
            </Link>

            {/* Footer */}
            <div className="col-span-2 home-card rounded-lg h-48 flex items-center justify-center">
              Proudly Developed & Designed by Arshia :)
            </div>
          </div>
          <div className="bg-zinc-900 overflow-hidden grid grid-cols-3 gap-4 items-center content-center justify-center text-2xl text-orange-500 rounded-xl mt-10 p-8 relative">
            <div className="absolute top-0 -left-10 md:-left-56   w-80 h-80 md:w-[70rem] md:h-[50rem] md:mx-auto bg-orange-200 rounded-full blur-3xl z-0 opacity-45"></div>

            <h1 className="z-10 col-span-6 text-2xl md:text-4xl text-left text-orange-100 uppercase items-center flex justify-center md:justify-start">
              <img className="w-16 mr-2" src={star} alt="" />
              Quotes of the Day
            </h1>

            <h3 className="z-10 col-span-5 text-right">
              <Quote />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
