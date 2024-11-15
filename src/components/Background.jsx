import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Background({ currentSection = 'home' }) {
  const [visibleElements, setVisibleElements] = useState(['circle', 'square']);

  useEffect(() => {

    switch (currentSection) {
      case 'home':
        setVisibleElements(['circle', 'square']);
        break;
      case 'about':
        setVisibleElements(['triangle', 'star']);
        break;
      case 'contact':
        setVisibleElements(['circle', 'star']);
        break;
      default:
        setVisibleElements([]);
    }
  }, [currentSection]);

  return (
    <div className="fixed -z-10 inset-0 pointer-events-none w-full">
      <div className="relative w-full h-full mt-0">
        <svg className="w-full absolute top-0 left-0 h-auto" viewBox="0 0 900 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g transform="scale(-1, 1) translate(-900, 0)">
            <path d="M0 139L37.5 134.8C75 130.7 150 122.3 225 157.7C300 193 375 272 450 329.3C525 386.7 600 422.3 675 425.3C750 428.3 825 398.7 862.5 383.8L900 369L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#fb923c"></path>
            <path d="M0 105L37.5 97.5C75 90 150 75 225 87.5C300 100 375 140 450 185.7C525 231.3 600 282.7 675 290C750 297.3 825 260.7 862.5 242.3L900 224L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#f37724"></path>
            <path d="M0 138L37.5 144.2C75 150.3 150 162.7 225 149.2C300 135.7 375 96.3 450 69.3C525 42.3 600 27.7 675 48.7C750 69.7 825 126.3 862.5 154.7L900 183L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#ea580c"></path>
          </g>
        </svg>

        <svg 
          className="w-full absolute left-0 -translate-y-[10%]"  
          id="svg" 
          viewBox="0 0 1440 600" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0,400 L 0,300 C 96.97607655502392,292.2488038277512 193.95215311004785,284.49760765550235 295,280 C 396.04784688995215,275.50239234449765 501.16746411483246,274.25837320574163 588,250 C 674.8325358851675,225.74162679425837 743.3779904306219,178.4688995215311 829,137 C 914.6220095693781,95.5311004784689 1017.3205741626793,59.86602870813397 1122,38 C 1226.6794258373207,16.13397129186603 1333.3397129186603,8.066985645933014 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <path d="M 0,400 L 0,400 C 112.41148325358853,399.1387559808613 224.82296650717706,398.27751196172255 330,395 C 435.17703349282294,391.72248803827745 533.1196172248804,386.02870813397124 626,350 C 718.8803827751196,313.97129186602876 806.6985645933015,247.60765550239236 885,217 C 963.3014354066985,186.39234449760764 1032.0861244019138,191.54066985645932 1123,178 C 1213.9138755980862,164.45933014354068 1326.956937799043,132.22966507177034 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
          <path d="M 0,400 L 0,500 C 115.866028708134,516.0765550239234 231.732057416268,532.1531100478469 323,510 C 414.267942583732,487.8468899521531 480.9377990430622,427.46411483253587 561,396 C 641.0622009569378,364.53588516746413 734.5167464114833,361.99043062200957 834,351 C 933.4832535885167,340.00956937799043 1038.9952153110048,320.57416267942585 1141,294 C 1243.0047846889952,267.42583732057415 1341.5023923444976,233.71291866028707 1440,200 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        </svg>

        <svg 
          className="absolute right-0 top-[10%] -translate-y-1/2" 
          width="300" 
          height="900" 
          viewBox="0 0 300 400"
        >
          <path
            d="M 300,0 A 300,300 0 0 0 300,600 L 300,0 Z"
            fill="#fbbf24"
            fillOpacity="0.7"
          />
        </svg>

        <svg 
          className="absolute left-0 top-[2600px] " 
          width="100" 
          height="600" 
          viewBox="0 0 300 1200"
        >
          <path
            d="M 0,0 A 300,300 0 0 1 0,600 L 0,0 Z"
            fill="#fbbf24"
            fillOpacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Background;