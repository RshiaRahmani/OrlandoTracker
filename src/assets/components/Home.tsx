import truck from "../images/icons/truck-loading.png";
import shop from "../images/icons/shopping-cart.png";
import horn from "../images/icons/party-horn.png";
import handEmoji from "../images/icons/hand.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-screen md:w-3/4 justify-center mx-auto">
        <div className="w-screen justify-center p-2 md:p-10 text-center min-h-screen mt-1 text-white">
          <h1 className="text-3xl md:text-4xl text-center md:text-left mt-5 text-orange-500 uppercase flex items-center justify-center md:justify-start">
            <span className="whitespace-nowrap">Welcome back, Orlando</span>
            <img
              src={handEmoji}
              className="w-8 h-8 md:w-12 md:h-12 ml-2"
              alt="Hand Emoji"
            />
          </h1>

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
              Proudly made by Arshia :)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
