import "./home.css";
import logo from "../../Images/equipment suppliers logo mini.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Context/Context";
import img from "../../Images/dashboard-.png";

const AdminBar = () => {
  const {
    name,
    setName,
    pricep,
    setPricep,
    description,
    setDescription,
    image,
    setImage,
  } = useContext(MyContext);
  const navigate = useNavigate();
  let [user, setUser] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [responce  , setResponce] = useState("")

  // console.log('Home Page');
  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `https://sore-cyan-fly-kit.cyclic.app/api/v1/profile`,
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        // console.log("response: ", response);
        setResponce(response.data);
        setUser(true);
      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
  };


  const handleButtonClick = (item) => {
    // console.log(item);
    const { name, price, description, imageUrl } = item;
    setName(name);
    setPricep(price);
    setDescription(description);
    setImage(imageUrl);
    navigate(`/Productdetail2`);
  };

  return (
    <nav className="nav bg-gray-900 flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-4 text-grey-darkest">
        <div style={{ width: "220px" }} class="logo ">
            
        <Link to={"/Dashbord"} class="flex items-center justify-center	 pl-2.5 mb-5 mt-2">
            <img src={img} class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
            
            <span class="self-center text-xl font-semibold whitespace-nowrap   text-white ">
              Dashboard 
            </span>
          </Link>
          
        </div>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
        onClick={toggleMenu}
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul
        className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
        id="menu"
      >
        <li className="md:border-none mt-2    mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/Prducts">Product</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/AllProductDashboad">All Products</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="">Payments</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/productrequest">Requests</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/AllUser">Users</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/UserProduct">User product</Link>
        </li>

       
        {/* */}
        
        
      </ul>


    </nav>
  );
};

export default AdminBar;
