import "./navbar2.css";
import logo from "../../Assests/car1.jpg";
import logos from "../../Assests/logo-6.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Navbar2 = () => {

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

  return (
   
<Navbar fluid rounded className="bg-slate-200">
      <Navbar.Brand href="https://brightoncarssales.co.uk/" > 
        <img src={logos} className="mr-3  h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
         
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
        <Navbar.Link active className="divhead "> 
         <span className="headcolorss text-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BSicon_STR_red.svg/1024px-BSicon_STR_red.svg.png" alt="ww" className="h-6 w-6 inline" /> Home </span>
         </Navbar.Link>
         </Link>
         <Link to="/stock">
        <Navbar.Link className="divhead "><span className="headcolorss text-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BSicon_STR_red.svg/1024px-BSicon_STR_red.svg.png" alt="ww" className="h-6 w-6 inline" />Current Stock</span></Navbar.Link>
        </Link>
        <Link to="/sold">
        <Navbar.Link className="divhead "><span className="headcolorss text-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BSicon_STR_red.svg/1024px-BSicon_STR_red.svg.png" alt="ww" className="h-6 w-6 inline" />Sold</span></Navbar.Link>
        </Link>
        <Link to="/finance">
        <Navbar.Link href="/" className="divhead "><span className="headcolorss text-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BSicon_STR_red.svg/1024px-BSicon_STR_red.svg.png" alt="ww" className="h-6 w-6 inline" />Finance</span></Navbar.Link>
        </Link>
        <Link to="/contact">
        <Navbar.Link className="divhead "><span className="headcolorss text-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BSicon_STR_red.svg/1024px-BSicon_STR_red.svg.png" alt="ww" className="h-6 w-6 inline" />Contact</span></Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
