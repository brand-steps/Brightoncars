import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Dishwashing = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [Glass , SetGlass] = useState("Glasswashers");
    const [underdish , Setunderdish] = useState("Undercounter Dishwashers");
    const [passthrough , Setpassthrough] = useState("Pass Through Dishwashers");
    const [dishwash , Sedishwash] = useState("Dishwasher Tables");
    const [cuttlery , Setcuttlery] = useState("Cuttlery & Glass Polishers");
    const [shower , Setshower] = useState("Shower Unit & Faucets");
    const [racks , Setracks] = useState("Dishwasher Racks");
    

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '160px', // Adjust the width as needed
    height: '180px',


    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
 

  const imageStyle = {
    width: '90px',
    height: '80px',
    marginBottom: '2px',
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Diswashing?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
      console.log("Products" + response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };

  const GetGlass = () => {
    navigate(`/Subcategorypage/${Glass}`)
  }
  const Getunderdish = () => {
    navigate(`/Subcategorypage/${underdish}`)
  }
  const Getpassthrough = () => {
    navigate(`/Subcategorypage/${passthrough}`)
  }
  const Getdishwash = () => {
    navigate(`/Subcategorypage/${dishwash}`)
  }
  const Getcuttlery = () => {
    navigate(`/Subcategorypage/${cuttlery}`)
  }
  const getshower = () => {
    navigate(`/Subcategorypage/${shower}`)
  }
  const getracks = () => {
    navigate(`/Subcategorypage/${racks}`)
  }
  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

    return (
<>

<Home/>
<div >
        
        <div className='flex justify-evenly flex-wrap my-4' >

        <div style={containerStyle} className="subhovers" onClick={GetGlass}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BW800-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Glasswashers</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getunderdish}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DW500P-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Undercounter Dishwashers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getpassthrough}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DW1040TP-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Pass Through Dishwashers</p>
      </div>
            <div style={containerStyle} className="subhovers" onClick={Getdishwash}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR612DR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Dishwasher Tables</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getcuttlery}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BPR002-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cuttlery & Glass Polishers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getshower}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/VT04-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Shower Unit & Faucets</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getracks}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/500x500x105-plates_1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Dishwasher Racks</p>
      </div>
      
      
    </div>

      </div>
      <hr/>
<h1 className="flex  flex-wrap justify-center heads">Products</h1>
<div className='flex  flex-wrap justify-center   '>
        {products.map((eachProduct, i) => (
          <Cardss index={eachProduct._id} price={eachProduct.price} img={eachProduct.imageUrl} text={eachProduct.name} 
          paragraph={eachProduct.description} cats={eachProduct.category} colors={eachProduct.color}
          mats={eachProduct.material} capicitys = {eachProduct.capacity} shelf = {eachProduct.shelves} lids = {eachProduct.lid} 
          lights = {eachProduct.lightening} levels = {eachProduct.noiselevel} doors = {eachProduct.door} widths = {eachProduct.Width}
          depths = {eachProduct.depth} heights = {eachProduct.height} weights = {eachProduct.weight} consumptions = {eachProduct.powerconsumption}
          supplys = {eachProduct.powersupply} powers = {eachProduct.power} temps = {eachProduct.temperature} refris = {eachProduct.refrigerant}
          coolings = {eachProduct.cooling} warrantys = {eachProduct.warranty} castorss = {eachProduct.castors} trays = {eachProduct.tray}
          pressures = {eachProduct.pressure} productions = {eachProduct.production} innerheights = {eachProduct.innerheight} baskets = {eachProduct.basket}
          programss = {eachProduct.programs} volumes = {eachProduct.volume} cycless = {eachProduct.watercycles} pumps = {eachProduct.waterpump}
          rinsepowers = {eachProduct.rinsepower} dispensers = {eachProduct.dispenser} rinsefuncs = {eachProduct.rinsefunc} volumerinses = {eachProduct.volumerinse}
          versions = {eachProduct.version} taps = {eachProduct.tap} outputs = {eachProduct.output} feets = {eachProduct.productfeet}
          bottomshelfs = {eachProduct.bottomshelf} bowlposs = {eachProduct.bowlpos} sinkbowls = {eachProduct.sinkbowl} upstands = {eachProduct.upstand}
          assemblys = {eachProduct.assembled} timers = {eachProduct.timer} controlss = {eachProduct.controls} rpms = {eachProduct.rpm}
          speedss = {eachProduct.speeds} includeds = {eachProduct.included} weldingbars = {eachProduct.weldingbar} bins = {eachProduct.bin}
          waterconnections = {eachProduct.waterconnection} types = {eachProduct.type} locks = {eachProduct.lock} worksurfaces = {eachProduct.worksurface}
          gasconsumptions = {eachProduct.gasconsumption} defrosts = {eachProduct.defrost} steams = {eachProduct.steam} piecess = {eachProduct.pieces}
          diameters = {eachProduct.diameter} lengths = {eachProduct.length}

          />
        ))}
      </div>


      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

</>
    )
}
export default Dishwashing;