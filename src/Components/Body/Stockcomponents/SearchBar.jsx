import React from "react"
import { Dropdown } from 'flowbite-react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './stockSlider/searchbar.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
    const [model, setmodel] = useState("")
    const [submodel, setsubmodel] = useState("")
    const [make, setmake] = useState("")
    const [price, setprices] = useState("")
    const [results, setResults] = useState([]);
    const [resultbool, setresultbool] = useState(false);
    const [showbool, setshowbool] = useState(false)

    const performSearch = async () => {
      if (model === "Any Make") {
        setmodel("")
      }
      if (submodel === "Any Model") {
        setsubmodel("")
      }
      if (make === "Any year") {
        setmake("")
      }


      try {
        const response = await axios.get(
          `https://drab-tan-sheep-fez.cyclic.app/api/search?make=${model}&model=${submodel}&year=${make}&price=${price}`
        );
        console.log("Search results: ", response.data);
        setResults(response.data);
        console.log("res", results);
        setresultbool(true);
        setshowbool(true);
      } catch (error) {
        console.log("Error in performing search: ", error);
      }
    };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',


        width: '800px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const buttonStyle = {
        background: '#E5A317',
        color: 'black',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',

      };
    const txtcolor = {
        color: "#E5A317"
    }
  return (
    <>

        <div className='mx-10 my-6 '>

  <div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <select id="model" name='model' onChange={(event) => { setmodel(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option value="Any Make">Any Make</option>
        
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Nissan">Nissan</option>
        <option value="Peugeot">Peugeot</option>

        {/*}
        <option value="Albarth">Albarth</option>
        <option value="Alpha Romeo">Alpha Romeo</option>
        <option value="Alpine">Alpine</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Audi">Audi</option>
        <option value="Bently">Bently</option>
        <option value="BMW">BMW</option>
        <option value="Byd">Byd</option>
        <option value="Citroen">Citroen</option>
        <option value="Cupra">Cupra</option>
        <option value="Dacia">Dacia</option>
        <option value="Ds">Ds</option>
        <option value="Flat">Flat</option>
        <option value="Ford">Ford</option>
        <option value="Genesis">Genesis</option>
        <option value="Honda">Honda</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Infiniti">Infiniti</option>
        <option value="Isuzu">Isuzu</option>
        <option value="Iveco">Iveco</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Jeep">Jeep</option>
        <option value="Kia">Kia</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Levc">Levc</option>
        <option value="Lexus">Lexus</option>
        <option value="Maserati">Maserati</option>
        <option value="Mazda">Mazda</option>
        <option value="Mercedes">Mercedes</option>
        <option value="MG">MG</option>
        <option value="MINI">MINI</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Polestar">Polestar</option>
        <option value="Porsche">Porsche</option>
        <option value="Renault">Renault</option>
        <option value="Seat">Seat</option>
        <option value="Skonda">Skonda</option>
        <option value="Smart">Smart</option>
        <option value="Ssangyong">Ssangyong</option>
        <option value="Subaru">Subaru</option>
        <option value="Suzuki">Suzuki</option>
        <option value="Tesla">Tesla</option>
        <option value="Toyota">Toyota</option>
        <option value="Vauxhall">Vauxhall</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Volvo">Volvo</option>
  */}
</select>
 </div>
 <div className="relative z-0 w-full mb-6 group">
    <select id="submodel" name='submodel' onChange={(event) => { setsubmodel(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
    <option value="Any Model">Any Model</option>

    {model === "Audi" && (
<>

        <option value="All 1-series">A1</option>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
        <option value="A6">A6</option>
        <option value="e-tron">e-tron</option>
        <option value="Q2">Q2</option>
        <option value="Q3">Q3</option>
        <option value="Q4">Q4</option>
        <option value="Q5">Q5</option>
        <option value="Q7">Q7</option>
        <option value="Q8">Q8</option>
        <option value="T1">T1</option>



</>
        )}

{model === "BMW" && (
<>
        <option value="All 1-series">All 1-series</option>
        <option value="All 2-series">All 2-series</option>
        <option value="All 3-series">All 3-series</option>
        <option value="All 4-series">All 4-series</option>
        <option value="All 5-series">All 5-series</option>
        <option value="All 6-series">All 6-series</option>
        <option value="All 7-series">All 7-series</option>



</>
        )}
        {model === "Ford" && (
<>
        <option value="B-Max">B-Max</option>
        <option value="ECosport">ECosport</option>
        <option value="Fiesta">Fiesta</option>
        <option value="Focus">Focus</option>
        <option value="Galaxy">Galaxy</option>
        <option value="Puma">Puma</option>
        <option value="S-Max">S-Max</option>



</>
        )}
        {model === "Honda" && (
<>
        <option value="Civic">Civic</option>
        <option value="CRV">CRV</option>
        <option value="HRV">HRV</option>
        <option value="Jazz">Jazz</option>

</>
        )}
        {model === "Hyundai" && (
<>
        <option value="Bayon">Bayon</option>
        <option value="I10">I10</option>
        <option value="I20">I20</option>
        <option value="I30">I30</option>
        <option value="Ioniq">Ioniq</option>
        <option value="Kona">Kona</option>
        <option value="Tucson">Tucson</option>



</>
        )}
                {model === "Nissan" && (
<>
        <option value="Juke">Juke</option>
        <option value="Leaf">Leaf</option>
        <option value="Micra">Micra</option>
        <option value="Note">Note</option>
        <option value="Qashqai">Qashqai</option>
        <option value="Kona">Kona</option>
        <option value="X-Trail">X-Trail</option>



</>
        )}
                {model === "Peugeot" && (
<>
        <option value="108">108</option>
        <option value="2008">2008</option>
        <option value="3008">3008</option>
        <option value="208">208</option>
        <option value="5008">5008</option>
        <option value="508">508</option>
        <option value="308">308</option>

</>
        )}
</select>
 </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" name='country' onChange={(event) => { setmake(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option value="Any year">Any year</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>

</select>
 </div>

    <div className="relative z-0 w-full mb-6 group">
    <Box className="w-20 lg:w-52 md:w-36 sm:w-28">
        <p>Price</p>
      <Slider onChange={(event) => { setprices(event.target.value);}} className="w-full"
      sx={{
        width: 250,
        color: '#E5A317',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}
        size="small"
        defaultValue={70000}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={10}      
        min={10000}
        max={100000}
      />

    </Box>
     </div>
     <div className="relative z-0 w-full mb-6 group">
     <button onClick={performSearch} className="btnstylo ml-5 w-56 h-14 mb-2 text-2xl">Search</button>
 </div>

  </div>
  {results.length === 0 ? (
          <></>
        ) : (
          <ul className={`PrdouctSerchUls`} onMouseLeave={()=> {setshowbool(false)}}>
            {results.map((item) => (
              <li
                key={item._id}
                onClick={() => {navigate(`/detailstock/${item._id}`)}}
                className="itemHoverEffect lsthov cursor-pointer flex items-center p-2  "
              >
                <img
                  src={item.imageUrl1}
                  alt={item.carname}
                  className="mr-3"
                  width={70}
                  height={20}
                />
                <div>
                  <p className="text-md tzxt font-semibold">{item.carname}</p>
                  <p className="tzxtprice">£{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
</div>



  {/*}  <div className='flex  justify-evenly flex-wrap my-4 ' >
      <div style={containerStyle}>
      <form>
    <div className="flex bg-black h-20 ">
        <div className="mt-5">
        <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Model</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Porche">Porche</option>
        <option value="Subaru">Subaru</option>
        <option value="Porche">Porche</option>


</select>
    </div>
    <div className="ml-5 mt-5">
    <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Make</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>


</select>

    </div>
    
     <div className="ml-5 mt-2 lg:mt-2 md:mt-2 sm:mt-2 mt-2">
    <Box className="w-20 lg:w-52 md:w-36 sm:w-28">
        <p>Price</p>
      <Slider
      sx={{
        color: '#E5A317',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={10}
        max={110}
      />

    </Box>
    </div>
    <button style={buttonStyle} className="ml-5 w-56 h-14 mb-2">Search</button>

     {/*}   <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required/>
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
  </div> 
    </div>
</form> 

 </div>




      
    </div>
*/}

</>
  )
}

export default SearchBar