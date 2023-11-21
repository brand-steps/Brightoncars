import React from 'react';
import carback1 from '../../../../Assests/carback2.jpeg'
import carback3 from '../../../../Assests/carback3.jpg'
import carback2 from '../../../../Assests/carback6.jpg'

import carback4 from '../../../../Assests/carback5.avif'

import './maintype.css';

const MainTypes = () => {



  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '600px', // Adjust the width as needed
    height: '500px',
    background:  `url(${carback1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '600px', // Adjust the width as needed
    height: '500px',
    background:  `url(${carback3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '600px', // Adjust the width as needed
    height: '500px',
    background:  `url(${carback4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
  };
  const containerStyle4 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '600px', // Adjust the width as needed
    height: '500px',
    background:  `url(${carback2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#00072d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <div className='flex d-flex justify-evenly flex-wrap my-12'>
      <div style={containerStyle} className='imgback'>
<button className='buttonstyle text-2xl opacity-90'>Showroom</button>
      </div>
      <div style={containerStyle2} className='imgback'>

<button className='buttonstyle text-2xl opacity-90'>Finance</button>
      </div>

      <div style={containerStyle3} className='imgback'>
<button className='buttonstyle text-2xl opacity-90'>Previously Sold</button>
      </div>
      <div style={containerStyle4} className='imgback'>

<button className='buttonstyle text-2xl opacity-90'>Contact Us</button>
      </div>

      
    </div>
  );
}

export default MainTypes;