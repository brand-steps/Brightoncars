import React from 'react';
import './addstock.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStock = () => {

  const navigate = useNavigate();
    const [carname, setcarname] = useState()
    const [make, setmake] = useState()
    const [model, setmodel] = useState()
    const [bodys, setbodys] = useState()
    const [milage, setmilage] = useState()
    const [year, setyear] = useState()
    const [color, setcolor] = useState()
    const [fueltype, setfueltype] = useState()
    const [gearbox, setgearbox] = useState()
    const [door, setdoor] = useState()
    const [enginetype, setenginetype] = useState()
    const [enginesize, setenginesize] = useState()
    const [mpg, setmpg] = useState()
    const [height, setheight] = useState()
    const [length, setlength] = useState()
    const [width, setwidth] = useState()
    const [co2emission, setco2emission] = useState()
    const [ledlight, setledlight] = useState()
    const [navigation, setnavigation] = useState()
    const [coolingseats, setcoolingseats] = useState()
    const [soundsystem, setsoundsystem] = useState()
    const [airbags, setairbags] = useState()
    const [backcamera, setbackcamera] = useState()
    const [parkingcamera, setparkingcamera] = useState()
    const [traction, settraction] = useState()
    const [antilockbreaks, setantilockbreaks] = useState()
    const [aircondition, setaircondition] = useState()
    const [climatecontrol, setclimatecontrol] = useState()
    const [sunroof, setsunroof] = useState()
    const [price, setprice] = useState()
    const [installment, setinstallment] = useState()
    const [installmentmonths, setinstallmentmonths] = useState()
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [description, setdescription] = useState()

    const [carnameError, setFirstError] = useState();
    const [makeError, setmakeError] = useState();
    const [modelError, setmodelError] = useState();
    const [bodysError, setbodysError] = useState();
    const [milageError, setmilageError] = useState();
    const [yearError, setyearError] = useState();
    const [colorError, setcolorError] = useState();
    const [fueltypeError, setfueltypeError] = useState();
    const [gearboxError, setgearboxError] = useState();
    const [doorError, setdoorError] = useState();
    const [enginetypeError, setenginetypeError] = useState();
    const [enginesizeError, setenginesizeError] = useState();
    const [mpgError, setmpgError] = useState();
    const [heightError, setheightError] = useState();
    const [lengthError, setlengthError] = useState();
    const [widthError, setwidthError] = useState();
    const [co2emissionError, setco2emissionError] = useState();
    const [ledlightError, setledlightError] = useState();
    const [navigationError, setnavigationError] = useState();
    const [coolingseatsError, setcoolingseatsError] = useState();
    const [soundsystemError, setsoundsystemError] = useState();
    const [airbagsError, setairbagsError] = useState();
    const [backcameraError, setbackcameraError] = useState();
    const [parkingcameraError, setparkingcameraError] = useState();
    const [tractionError, settractionError] = useState();
    const [antilockbreaksError, setantilockbreaksError] = useState();
    const [airconditionError, setairconditionError] = useState();
    const [climatecontrolError, setclimatecontrolError] = useState();
    const [sunroofError, setsunroofError] = useState();
    const [priceError, setpriceError] = useState();
    const [installmentError, setinstallmentError] = useState();
    const [installmentmonthsError, setinstallmentmonthsError] = useState();

    const [image1, setimage1] = useState([]);
    const [image2, setimage2] = useState();
    const [image3, setimage3] = useState();
    const [image4, setimage4] = useState();
    const [image5, setimage5] = useState();
    const [image6, setimage6] = useState();

    const buttonStyle2 = {
      background: 'red',
      color: 'black',
      fontWeight: 'bold',
      padding: '8px 16px',
      marginTop: '12px',
      cursor: 'pointer',
    };
    const handleChange = (e) => {
      setimage1({ ...image1, [e.target.name]: e.target.files });
      };
    const handleFileChange = (event) => {
      // Ensure only up to 8 files are selected
      setimage1(event.target.files);

    };
    const handleFileChange2 = (event) => {
      setimage2(event.target.files);
    };
    const handleFileChange3 = (event) => {
      setimage3(event.target.files);
    };
    const handleFileChange4 = (event) => {
      setimage4(event.target.files);
    };
    const handleFileChange5 = (event) => {
      setimage5(event.target.files);
    };
    const handleFileChange6 = (event) => {
      setimage6(event.target.files);
    };


 const handleUpload = async () => {
    alert("Product Added Suceesfully ");
console.log("img",image1)
console.log("img2",image2)

console.log("img3",image3)

if (!make || make == "Any Model") {
  setmake("");
  setmakeError("Please Enter a Model");
}

    if (!image1 || image1.length === 0) {
      alert("image 1 required")
      return;
    }
    if (!image2 || image2.length === 0) {
      alert("image 2 required")
      return;
    }    if (!image3 || image3.length === 0) {
      alert("image 3 required")
      return;
    }    if (!image4 || image4.length === 0) {
      alert("image 4 required")
      return;
    }    if (!image5 || image5.length === 0) {
      alert("image 5 required")
      return;
    }    if (!image6 || image6.length === 0) {
      alert("image 6 required")
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < image1.length; i++) {
      formData.append("images", image1[i]);
    }
    for (let i = 0; i < image2.length; i++) {
      formData.append("images", image2[i]);
    }
    for (let i = 0; i < image3.length; i++) {
      formData.append("images", image3[i]);
    }
    for (let i = 0; i < image4.length; i++) {
      formData.append("images", image4[i]);
    }
    for (let i = 0; i < image5.length; i++) {
      formData.append("images", image5[i]);
    }
    for (let i = 0; i < image6.length; i++) {
      formData.append("images", image6[i]);
    }
    formData.append("carname", carname);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("bodys", bodys);
    formData.append("milage", milage);
    formData.append("year", year);

    //refrigeration
    formData.append("color", color);
    formData.append("fueltype", fueltype);
    formData.append("gearbox", gearbox);
    formData.append("door", door);
    formData.append("enginetype", enginetype);
    formData.append("enginesize", enginesize);
    formData.append("mpg", mpg);
    formData.append("height", height);
    formData.append("length", length);
    formData.append("width", width);
    formData.append("co2emission", co2emission);
    formData.append("ledlight", ledlight);
    formData.append("navigation", navigation);
    formData.append("coolingseats", coolingseats);
    formData.append("soundsystem", soundsystem);
    formData.append("airbags", airbags);
    formData.append("backcamera", backcamera);
    formData.append("parkingcamera", parkingcamera);
    formData.append("traction", traction);

    //dishwashing
    formData.append("antilockbreaks", antilockbreaks);
    formData.append("aircondition", aircondition);
    formData.append("climatecontrol", climatecontrol);
    formData.append("sunroof", sunroof);
    formData.append("price", price);
    formData.append("installment", installment);
    formData.append("installmentmonths", installmentmonths);
    formData.append("description", description);

    try {
      const response = await axios.post(
        "https://drab-tan-sheep-fez.cyclic.app/productrequesttest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Handle response from backend if needed
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
  return (
        <>
                <button style={buttonStyle2} onClick={()=>{navigate(`/displaystock`, { replace: true }) }} className='inline-block'>Edit your Stock</button>

<h1 className='text-3xl font-bold text-white text-center mt-5'>Add Stock</h1>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setcarname(event.target.value); setFirstError("") }} name="carname" id="carname" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="carname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car name</label>
        {carnameError && <p className="error-message">first name required</p>} 
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="make" name='make' onChange={(event) => { setmake(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option value="Any Make">Any Make</option>
        
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Nissan">Nissan</option>
        <option value="Peugeot">Peugeot</option>
</select>   </div>
  </div>
  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <select id="submodel" name='submodel' onChange={(event) => {setmodel (event.target.value); setmodelError("")}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
    <option value="Any Model">Any Model</option>

    {make === "Audi" && (
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

{make === "BMW" && (
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
        {make === "Ford" && (
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
        {make === "Honda" && (
<>
        <option value="Civic">Civic</option>
        <option value="CRV">CRV</option>
        <option value="HRV">HRV</option>
        <option value="Jazz">Jazz</option>

</>
        )}
        {make === "Hyundai" && (
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
                {make === "Nissan" && (
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
                {make === "Peugeot" && (
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
      {modelError && <p className="error-message">{modelError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setbodys(event.target.value); setbodysError("") }} name="bodys" id="bodys" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="bodys" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Body type</label>
      {bodysError && <p className="error-message">{bodysError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setmilage(event.target.value); setmilageError("") }} name="milage" id="milage" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="milage" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Milage in KM</label>
      {milageError && <p className="error-message">{milageError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <select id="year" name='year' onChange={(event) => { setyear(event.target.value); setyearError("") }} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Make</option>
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
      {yearError && <p className="error-message">{yearError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
      <input  onChange={(event) => { setcolor(event.target.value); setcolorError("") }} name="color" id="color" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="color" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Color</label>
      {colorError && <p className="error-message">{colorError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <input  name="fueltype" onChange={(event) => {setfueltype (event.target.value); setfueltypeError("")}} id="fueltype" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="model" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fuel Type</label>
      {fueltypeError && <p className="error-message">{fueltypeError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setgearbox(event.target.value); setgearboxError("") }} name="gearbox" id="gearbox" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="gearbox" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">GearBox Type</label>
      {gearboxError && <p className="error-message">{gearboxError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setdoor(event.target.value); setdoorError("") }} name="door" id="door" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="door" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Of Doors</label>
      {doorError && <p className="error-message">{doorError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setenginetype(event.target.value); setenginetypeError("") }} name="enginetype" id="enginetype" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="enginetype" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Type</label>
      {enginetypeError && <p className="error-message">{enginetypeError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
      <input  onChange={(event) => { setenginesize(event.target.value); setenginesizeError("") }} name="enginesize" id="enginesize" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="enginesize" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Size (CC) </label>
      {enginesizeError && <p className="error-message">{enginesizeError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <input type='number'  name="mpg" onChange={(event) => {setmpg(event.target.value); setmpgError("")}} id="mpg" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="mpg" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MPG</label>
      {mpgError && <p className="error-message">{mpgError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setheight(event.target.value); setheightError("") }} name="height" id="height" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="height" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height (mm)</label>
      {heightError && <p className="error-message">{heightError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setlength(event.target.value); setlengthError("") }} name="length" id="length" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="length" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length (mm)</label>
      {lengthError && <p className="error-message">{lengthError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setwidth(event.target.value); setwidthError("") }} name="width" id="width" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="width" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width (mm)</label>
      {widthError && <p className="error-message">{widthError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
      <input type='number' onChange={(event) => { setco2emission(event.target.value); setco2emissionError("") }} name="co2emission" id="co2emission" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="co2emission" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co2 Emission (g/km)</label>
      {co2emissionError && <p className="error-message">{co2emissionError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="ledlight" onChange={(event) => { setledlight(event.target.value); setledlightError("") }} name='ledlight' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Led Lights Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>   
      {ledlightError && <p className="error-message">{ledlightError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="navigation" onChange={(event) => { setnavigation(event.target.value); setnavigationError("") }} name='navigation' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Navigation Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>       {navigationError && <p className="error-message">{navigationError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="coolingseats" onChange={(event) => { setcoolingseats(event.target.value); setcoolingseatsError("") }} name='coolingseats' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Cooling seats Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>       {coolingseatsError && <p className="error-message">{coolingseatsError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="soundsystem" onChange={(event) => { setsoundsystem(event.target.value); setsoundsystemError("") }} name='soundsystem' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Sound System Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>  
    {soundsystemError && <p className="error-message">{soundsystemError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="airbags" onChange={(event) => { setairbags(event.target.value); setairbagsError("") }} name='airbags' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Air Bags Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>  
  {airbagsError && <p className="error-message">{airbagsError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="backcamera" onChange={(event) => { setbackcamera(event.target.value); setbackcameraError("") }} name='backcamera' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Back Camera Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>   
      {backcameraError && <p className="error-message">{backcameraError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="parkingcamera" onChange={(event) => { setparkingcamera(event.target.value); setparkingcameraError("") }} name='parkingcamera' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Parking Camera Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>       {parkingcameraError && <p className="error-message">{parkingcameraError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="traction" onChange={(event) => { settraction(event.target.value); settractionError("") }} name='traction' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Traction Assist Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>       {tractionError && <p className="error-message">{tractionError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="antilockbreaks" onChange={(event) => { setantilockbreaks(event.target.value); setantilockbreaksError("") }} name='antilockbreaks' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Anti-Locks Brake Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>  
    {antilockbreaksError && <p className="error-message">{antilockbreaksError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="aircondition" onChange={(event) => { setaircondition(event.target.value); setairconditionError("") }} name='aircondition' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Air Condition Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>  
  {airconditionError && <p className="error-message">{airconditionError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-5 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="climatecontrol" onChange={(event) => { setclimatecontrol(event.target.value); setclimatecontrolError("") }} name='climatecontrol' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Climate Controls Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>   
      {climatecontrolError && <p className="error-message">{climatecontrolError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="sunroof" onChange={(event) => { setsunroof(event.target.value); setsunroofError("") }} name='sunroof' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Sun Roof Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>       {sunroofError && <p className="error-message">{sunroofError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input  onChange={(event) => { setprice(event.target.value); setpriceError("") }} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="price" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price </label>
        {priceError && <p className="error-message">{priceError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <select id="installment" onChange={(event) => { setinstallment(event.target.value); setinstallmentError("") }} name='installment' className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
        <option>Installment Available?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
</select>  
    {installmentError && <p className="error-message">{installmentError}</p>} 

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type='number'  onChange={(event) => { setinstallmentmonths(event.target.value); setinstallmentmonthsError("") }} name="installmentmonths" id="installmentmonths" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="installmentmonths" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Installment months </label>
   
  {installmentmonthsError && <p className="error-message">{installmentmonthsError}</p>} 

  </div>
  </div>


  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>

       <TextField fullWidth multiline maxRows={6}  onChange={(event) => { setdescription(event.target.value);  }} placeholder='Edit Product Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white bg-slate-200 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>



  <button type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Stock</button>
</div>

        </>

  );
}

export default AddStock;
