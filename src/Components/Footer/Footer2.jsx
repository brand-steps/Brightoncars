import React from 'react';
import logo from '../../Assests/logo-6.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import face from '../../Assests/face2.png'
import insta from '../../Assests/insta.webp'
import phone from '../../Assests/phone.png'

import './footer2.css';
function Footer2() {
  return (
    <Footer container className='bg-slate-200 '>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img src={logo} alt="logo" />
         {/*}   <Footer.Brand
              href="#"
              src={logo}
              alt="Flowbite Logo"
              name="" 
  /> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="about" className='headcolors'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-black'>About Us</Footer.Link>
                <Footer.Link href="#" className='text-black'>Home</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='headcolors'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#"className='text-black'>Facebook</Footer.Link>
                <Footer.Link href="#" className='text-black'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='headcolors' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-black'>Privacy Policy</Footer.Link>
                <Footer.Link href="#" className='text-black'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} className='text-black' />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
           {/*} <Footer.Icon href="#" icon={BsFacebook} className='headcolors'/>
            <Footer.Icon href="#" icon={BsInstagram} className='headcolors' />
            <Footer.Icon href="#" icon={BsTwitter} className='headcolors' />
            <Footer.Icon href="#" icon={BsGithub} className='headcolors'/>
<Footer.Icon href="#" icon={BsDribbble} className='headcolors'/> */}
        <img src={insta} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={phone} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={face} className="mr-3 inline h-7 " alt="Flowbite React Logo" />


          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer2;
