import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Footer2 from '../../../Components/Footer/Footer2'
import Cardss from '../../../Components/Body/Home/Cards/Cardss'
import BasicPagination from '../CurrentStocks/Pagination'
import { Link } from 'react-router-dom';
import Navbar2 from '../../../Components/Header/Navbar2'
import Soldheader from '../../../Components/Body/SoldComponent/Soldheader'
import SoldCards from '../../../Components/Body/Home/Cards/SoldCards'

const SoldStock = () => {


  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
  const [StarsArray, setStarsArray] = useState([1, 2, 3])
  
  let text = "Home  > Product Groups "
  let name = "PRODUCT GROUPS"


  const performSearch = async () => {
    try {
      const response = await axios.get(
        `https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/search?query=${searchInput}`
      );
      console.log("Search results: ", response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log("Error in performing search: ", error);
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://drab-tan-sheep-fez.cyclic.app/stocksdisplaytrue`);
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

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])
  return (
    <div>
      <Navbar2 />
{/*<SearchBar/> <CarHeading/> */}
<Soldheader/>
<div className='flex  flex-wrap justify-center  bg-black '>
        {products.map((value, i) => (
                <SoldCards img={value.imageUrl1} text={value.carname}  price={value.price}  paragraph={value.description} />

        ))}

{/*}
      <SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'Porsche Macan'}  price={"600"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
      <SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-macan-suv-petrol-2b7959af383d.jpg" price={"700"}  text={'BMW M135i'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" price={"800"}  text={'Toyota Land Cruiser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-cayenne-estate-petrol-d331b2e5a1ff.jpg" price={"900"}  text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'OVERTURN Porsche Macan'}   price={"1000"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-macan-suv-petrol-2b7959af383d.jpg"  price={"1200"} text={'Toyota Land Cruiser'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'REFRIGERATORS'}   price={"400"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<SoldCards img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-cayenne-estate-petrol-d331b2e5a1ff.jpg"  price={"1300"} text={'Toyota Land Cruiser'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
  */}
      </div>

        
      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

      <Footer2 />
    </div>
  )
}

export default SoldStock