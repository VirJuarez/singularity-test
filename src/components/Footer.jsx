import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from './auxiliars/CustomInput';

function Footer(){

    
    return (
        <footer className="bg-red-500 text-white py-12 w-full" style={{
            clipPath: "ellipse(100% 100% at 50% 100%)"
        }}>
          <div className="container mx-auto grid grid-cols-4 gap-4 py-4">
            <div className="col-span-1">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-yellow-400">About</h3>
              <ul className="space-y-2 text-md md:text-2xl">
                <li><Link to="*">Locations</Link></li>
                <li><Link to="*">Franchise With Us</Link></li>
                <li><Link to="*">Partners</Link></li>
                <li><Link to="*">About Us</Link></li>
                <li><Link to="*">Make Fetch Happen!</Link></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-yellow-400">Resources</h3>
              <div className="grid grid-cols-2 gap-4 text-md md:text-2xl">
                <ul className="space-y-2">
                  <li><Link to="*">Reviews</Link></li>
                  <li><Link to="*">Pet Resource Center</Link></li>
                  <li><Link to="*">Media Fact Sheet</Link></li>
                  <li><Link to="*">Blog</Link></li>
                  <li><Link to="*">News</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link to="*">Reviews</Link></li>
                  <li><Link to="*">Pet Resource Center</Link></li>
                  <li><Link to="*">Media Fact Sheet</Link></li>
                  <li><Link to="*">Blog</Link></li>
                  <li><Link to="*">News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-yellow-400">Newsletter</h3>
              <p className="mb-4 text-md md:text-2xl">Sign up to receive the Fetch! Family Newsletter</p>
              <CustomInput placeholder="Email Address" />
            </div>
          </div>
        </footer>
      );
    };

export default Footer;