import { useState, useEffect } from "react";
import "../../App.css";
import Calc from "./calculation";
import { addProduct, getProducts } from "../../firestoreFunctions";
import AOS from "aos";
//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
//import Inventory from "./assets/components/Inventory";
import cross from "../images/icons/cross.svg";

interface Product {
  id: string;
  name: string;
  category: string;
  expirationDate: string;
  branch: string;
  price: number;
}

function inventory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [branch, setBranch] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [errMss, setErrMss] = useState("");

  useEffect(() => {
    // Fetch products from Firestore on component mount

    selectedBranch;
    const fetchProducts = async () => {
      const productsFromDB = await getProducts();
      setProducts(productsFromDB);
    };

    fetchProducts();
    AOS.init();
  }, []);

  const handleAddProduct = async () => {
    setDateAdded(new Date().toString());
    if (
      !name ||
      !category ||
      !expirationDate ||
      !price ||
      !branch ||
      !dateAdded
    ) {
      setErrMss("Please fill all the fields");
      return;
    }
    if (name && category && expirationDate && price && branch && dateAdded) {
      await addProduct(
        name,
        category,
        expirationDate,
        parseFloat(price.toString()),
        branch,
        dateAdded
      );
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
      setName("");
      setCategory("");
      setExpirationDate("");
      setPrice("");
      setBranch("");
      setIsModalOpen(false);
      setErrMss("");
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProducts = products.filter((product) => {
    const isExpired = Date.parse(product.expirationDate) < Date.now();
    const matchesSearchQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.expirationDate.includes(searchQuery);

    if (selectedTag === "drinks") {
      return (
        product.category.toLowerCase() === "drinks" &&
        (!selectedBranch || product.branch === selectedBranch) &&
        matchesSearchQuery
      );
    } else if (selectedTag === "syrup") {
      return (
        product.category.toLowerCase() === "syrup" &&
        (!selectedBranch || product.branch === selectedBranch) &&
        matchesSearchQuery
      );
    } else if (selectedTag === "beer") {
      return (
        product.category.toLowerCase() === "beer" &&
        (!selectedBranch || product.branch === selectedBranch) &&
        matchesSearchQuery
      );
    } else if (selectedTag === "expired") {
      return (
        isExpired &&
        (!selectedBranch || product.branch === selectedBranch) &&
        matchesSearchQuery
      );
    } else if (selectedTag === "healthy") {
      return (
        !isExpired &&
        (!selectedBranch || product.branch === selectedBranch) &&
        matchesSearchQuery
      );
    } else if (selectedTag.toLowerCase() === "magusa") {
      return product.branch === "Magusa" && matchesSearchQuery;
    } else if (selectedTag.toLowerCase() === "starlux") {
      return product.branch === "Starlux" && matchesSearchQuery;
    } else {
      return matchesSearchQuery;
    }
  });

  return (
    <>
      <div
        className={`h-screen w-full text-center ${
          isModalOpen ? "blur-sm" : ""
        }`}
      >
        <div className="w-screen justify-center p-2 md:p-10 text-center min-h-screen mt-1 text-white">
          <div className="md:flex select-none space-y-3 md:space-y-0 md:space-x-8 md:justify-center w-full mb-10 bg-zinc-900 md:bg-transparent rounded-xl">
            {/* Top Cards */}
            <div className=" *:content-center p-3 flex md:flex-col">
              <img className="md:size-basic size-20" src={box} alt="" />
              <div className="flex md:border-b-4  rounded border-orange-500">
                <h6 className="text-sm content-center mr-1">Total items</h6>
                <h1 className="content-center"> {products.length}</h1>
              </div>
            </div>
            <div className=" *:content-center p-3 flex md:flex-col">
              <img className="md:size-basic size-20" src={archive} alt="" />
              <div className="flex md:border-b-4 rounded border-orange-500">
                <h6 className="text-sm content-center mr-1">Healthy items</h6>
                <h1 className="content-center">
                  {" "}
                  {
                    products.filter(
                      (product) =>
                        Date.parse(product.expirationDate) > Date.now()
                    ).length
                  }{" "}
                </h1>
              </div>
            </div>
            <div className=" *:content-center p-3 flex md:flex-col">
              <img className="md:size-basic size-20" src={chat} alt="" />
              <div className="flex md:border-b-4 rounded border-orange-500">
                <h6 className="text-sm content-center mr-1">Expired items</h6>
                <h1 className="content-center">
                  {" "}
                  {
                    products.filter(
                      (product) =>
                        Date.parse(product.expirationDate) < Date.now()
                    ).length
                  }{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="w-screen flex-col justify-center">
            <div className="w-screen flex justify-center">
              <div className="w-full md:w-5/6 flex justify-center items-center text-black space-x-5">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="searchBox bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-82 p-3"
                />
                <button
                  className="bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-w duration-300 ease-in-out"
                  onClick={() => setIsModalOpen(true)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center items-center space-x-2 text-xs md:text-lg">
              <div className="mt-4 select-none flex flex-wrap justify-center items-center space-x-2 text-xs md:text-lg">
                <button
                  className={`bg-zinc-900 border-zinc-300 hover:border-orange-500 text-white rounded-xl px-4 cursor-pointer mb-2 ${
                    selectedTag === "" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => {
                    handleTagClick("");
                    setSelectedBranch("");
                    setSelectedTag("");
                  }}
                >
                  All
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white flex rounded-xl items-center cursor-pointer mb-2 transition-all duration-300 ease-in-out ${
                    selectedTag === "magusa" ? "bg-orange-500 px-6" : "px-4"
                  }`}
                  onClick={() => {
                    handleTagClick("magusa");
                    setSelectedBranch("Magusa");
                  }}
                >
                  {selectedBranch === "Magusa" ? (
                    <div
                      data-aos="zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBranch("");
                        handleTagClick("");
                      }}
                      className="rounded-xl bg-orange-600 mr-3 transition-all duration-300 ease-in-out"
                    >
                      <img className="h-5 w-5" src={cross} alt="close" />
                    </div>
                  ) : null}
                  Magusa
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white flex rounded-xl items-center cursor-pointer mb-2 transition-all duration-300 ease-in-out ${
                    selectedTag === "starlux" ? "bg-orange-500 px-6" : "px-4"
                  }`}
                  onClick={() => {
                    handleTagClick("starlux");
                    setSelectedBranch("Starlux");
                  }}
                >
                  {selectedBranch === "Starlux" ? (
                    <div
                      data-aos="zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBranch("");
                        handleTagClick("");
                      }}
                      className="rounded-xl bg-orange-600 mr-3 transition-all duration-300 ease-in-out"
                    >
                      <img className="h-5 w-5" src={cross} alt="close" />
                    </div>
                  ) : null}
                  Starlux
                </button>

                <div className="border-r w-1 border-white mx-1 h-7 mb-2"></div>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white rounded-xl px-4  cursor-pointer mb-2 ${
                    selectedTag === "drinks" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleTagClick("drinks")}
                >
                  Drinks
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white rounded-xl px-4 p cursor-pointer mb-2 ${
                    selectedTag === "syrup" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleTagClick("syrup")}
                >
                  Syrup
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white rounded-xl px-4 py-2 cursor-pointer mb-2 ${
                    selectedTag === "beer" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleTagClick("beer")}
                >
                  Beer
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white rounded-xl px-4 py-2 cursor-pointer mb-2 ${
                    selectedTag === "expired" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleTagClick("expired")}
                >
                  Expired
                </button>

                <button
                  className={`bg-zinc-900 hover:border-orange-500 text-white rounded-xl px-4 py-2 cursor-pointer mb-2 ${
                    selectedTag === "healthy" ? "bg-orange-500" : ""
                  }`}
                  onClick={() => handleTagClick("healthy")}
                >
                  Healthy
                </button>
              </div>
            </div>
          </div>
          <Calc products={filteredProducts} />
        </div>
        <footer className="w-full text-center items-center md:px-10 px-2  items-center justify-center flex  mt-10 b-0">
          <p className="bg-zinc-900 items-center justify-center flex w-full h-12 rounded-t-xl">
            Developed By
            <a
              href="https://t.me/Sachima"
              target="_blank"
              className="text-orange-400 mx-1 underline hover:drop-shadow hover:text-orange-500 transition all-ease-in"
            >
              Arshia
            </a>{" "}
            - September 2024 ©
          </p>
        </footer>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            data-aos="zoom-in"
            className="bg-white rounded-lg p-8 z-50 relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 bg-transparent hover:bg-gray-800 hover:text-white font-semibold py-2 px-4 border border-0 hover:border-transparent rounded cursor-pointer transition duration-100 ease-in-out"
              onClick={() => {setIsModalOpen(false);  setErrMss("");}}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4 text-black">Add New Product</h2>
            <div className="flex flex-col space-y-4">
              <div
                className={`bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md transition all-ease-in ${errMss ? 'opacity-100' : 'opacity-0 h-0 w-0'}`}
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Seriously?!</p>
                    <p className="text-sm">
                      {errMss}
                    </p>
                  </div>
                </div>
              </div> 
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <select
                name="category"
                id=""
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="Other">-Select Category-</option>
                <option value="Drinks">Drinks</option>
                <option value="Syrup">Syrup</option>
                <option value="Beer">Beer</option>
                <option value="Food">Food</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Cake/Dessert</option>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
              </select>
              <input
                type="date"
                name="begin"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="Expiration Date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="Magusa">-Select Branch-</option>
                <option value="Magusa">Magusa</option>
                <option value="Starlux">Girne - Starlux</option>
              </select>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <button
                className="bg-orange-500 text-white rounded-lg p-2.5"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default inventory;


