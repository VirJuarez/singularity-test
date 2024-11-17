import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from './auxiliars/CustomInput';

function Footer(){
    const aboutLinks = [
        { text: "Locations", path: "*" },
        { text: "Franchise With Us", path: "*" },
        { text: "Partners", path: "*" },
        { text: "About Us", path: "*" },
        { text: "Make Fetch Happen!", path: "*" }
    ];

    const resourceLinks = [
        { text: "Reviews", path: "*" },
        { text: "Pet Resource Center", path: "*" },
        { text: "Media Fact Sheet", path: "*" },
        { text: "Blog", path: "*" },
        { text: "News", path: "*" }
    ];
    
    return (
        <footer className="bg-orange-600 text-white py-12 w-full px-4" style={{
            clipPath: window.innerWidth < 768 ? "ellipse(200% 100% at 50% 100%)" : "ellipse(100% 100% at 50% 100%)"
        }}>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4 md:px-0">
            <div className="col-span-1">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-yellow-400">About</h3>
              <ul className="space-y-2 text-md md:text-2xl">
                {aboutLinks.map((link, index) => (
                    <li key={index}><Link to={link.path}>{link.text}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-yellow-400">Resources</h3>
              <div className="grid grid-cols-2 gap-4 text-md md:text-2xl">
                <ul className="space-y-2">
                    {resourceLinks.map((link, index) => (
                        <li key={index}><Link to={link.path}>{link.text}</Link></li>
                    ))}
                </ul>
                <ul className="space-y-2">
                    {resourceLinks.map((link, index) => (
                        <li key={`second-${index}`}><Link to={link.path}>{link.text}</Link></li>
                    ))}
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
}

export default Footer;