import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./assets/components/navbar";
import Calc from "./assets/components/calculation";
import { addProduct, getProducts } from "./firestoreFunctions";
import box from "../src/assets/images/icons/box.png";
import archive from "../src/assets/images/icons/archive.png";
import chat from "../src/assets/images/icons/chat.png";
import AOS from "aos";
import "aos/dist/aos.css";

interface Product {
  id: string;
  name: string;
  category: string;
  expirationDate: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    // Fetch products from Firestore on component mount
    const fetchProducts = async () => {
      const productsFromDB = await getProducts();
      setProducts(productsFromDB);
    };

    fetchProducts();
    AOS.init();
  }, []);

  const handleAddProduct = async () => {
    if (name && category && expirationDate && price) {
      await addProduct(
        name,
        category,
        expirationDate,
        parseFloat(price.toString())
      );
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
      setName("");
      setCategory("");
      setExpirationDate("");
      setPrice("");
      setIsModalOpen(false);
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
      return product.category.toLowerCase() === "drinks" && matchesSearchQuery;
    } else if (selectedTag === "syrup") {
      return product.category.toLowerCase() === "syrup" && matchesSearchQuery;
    }else if(selectedTag === "beer" ){
      return product.category.toLowerCase() === "beer" && matchesSearchQuery;
    } else if (selectedTag === "expired") {
      return isExpired && matchesSearchQuery;
    } else if (selectedTag === "healthy") {
      return !isExpired && matchesSearchQuery;
    } else {
      return matchesSearchQuery;
    }
  });

  return (
    <>
      <div className={`h-screen w-full text-center ${isModalOpen ? "blur-sm" : ""}`}>
        <Nav />
        <div className="w-screen justify-center p-10 text-center h-96 mt-1 text-white">
          <div
            data-aos="zoom-in"
            className="md:flex space-y-3 md:space-y-0 md:space-x-8 md:justify-center w-full mb-10 bg-zinc-900 md:bg-transparent rounded-xl"
          >
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
                  className="bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-300 ease-in-out"
                  onClick={() => setIsModalOpen(true)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-2 justify-center items-center flex space-x-2 text-xs md:text-lg">
              <div
                className="bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer"
                onClick={() => handleTagClick("")}
              >
                All
              </div>
              <div className="border-r w-1 border-white mx-1 opacity-50 h-7 "></div>
              <div
                className={`bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer ${selectedTag === "drinks" ? "bg-gray-800" : ""}`}
                onClick={() => handleTagClick("drinks")}
              >
                drinks
              </div>
              <div
                className={`bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer ${selectedTag === "syrup" ? "bg-gray-800" : ""}`}
                onClick={() => handleTagClick("syrup")}
              >
                syrup
              </div>
              <div
                className={`bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer ${selectedTag === "beer" ? "bg-gray-800" : ""}`}
                onClick={() => handleTagClick("beer")}
              >
                Beer
              </div>
              <div
                className={`bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer ${selectedTag === "expired" ? "bg-gray-800" : ""}`}
                onClick={() => handleTagClick("expired")}
              >
                Expired
              </div>
              <div
                className={`bg-zinc-900 text-white rounded-xl opacity-80 px-4 py-2 cursor-pointer ${selectedTag === "healthy" ? "bg-gray-800" : ""}`}
                onClick={() => handleTagClick("healthy")}
              >
                Healthy
              </div>
        
            </div>
          </div>
          <Calc products={filteredProducts} />

          <footer className="w-full h-10 bg-gray-700 my-10 rounded-t-xl py-3 opacity-90">
            Developed By <a href="https://t.me/Sachima" target="_blank" className="text-orange-400 hover:drop-shadow hover:text-orange-500 transition all-ease-in">Arshia</a> - September 2024 ©
          </footer>
        </div>
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
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4 text-black">Add New Product</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="Expiration Date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
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

export default App;
