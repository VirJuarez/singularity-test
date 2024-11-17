import CustomInput from "./auxiliars/CustomInput";
import Box from "./auxiliars/Box";
import CustomText from "./auxiliars/CustomText";
import { sub } from "framer-motion/client";

function FlexibleComponent({title, subtitle}){
    return (
        <section className="relative max-w-screen py-8 mt-[10vh] flex flex-col items-start md:grid md:grid-cols-2 gap-8 bg-transparent">
          <svg 
          className="-z-10 top-40 w-[900px] md:w-full absolute left-0"  
          id="svg" 
          viewBox="0 0 1440 600" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0,400 L 0,300 C 96.97607655502392,292.2488038277512 193.95215311004785,284.49760765550235 295,280 C 396.04784688995215,275.50239234449765 501.16746411483246,274.25837320574163 588,250 C 674.8325358851675,225.74162679425837 743.3779904306219,178.4688995215311 829,137 C 914.6220095693781,95.5311004784689 1017.3205741626793,59.86602870813397 1122,38 C 1226.6794258373207,16.13397129186603 1333.3397129186603,8.066985645933014 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <path d="M 0,400 L 0,400 C 112.41148325358853,399.1387559808613 224.82296650717706,398.27751196172255 330,395 C 435.17703349282294,391.72248803827745 533.1196172248804,386.02870813397124 626,350 C 718.8803827751196,313.97129186602876 806.6985645933015,247.60765550239236 885,217 C 963.3014354066985,186.39234449760764 1032.0861244019138,191.54066985645932 1123,178 C 1213.9138755980862,164.45933014354068 1326.956937799043,132.22966507177034 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
          <path d="M 0,400 L 0,500 C 115.866028708134,516.0765550239234 231.732057416268,532.1531100478469 323,510 C 414.267942583732,487.8468899521531 480.9377990430622,427.46411483253587 561,396 C 641.0622009569378,364.53588516746413 734.5167464114833,361.99043062200957 834,351 C 933.4832535885167,340.00956937799043 1038.9952153110048,320.57416267942585 1141,294 C 1243.0047846889952,267.42583732057415 1341.5023923444976,233.71291866028707 1440,200 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#2563eb" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        </svg>
          <div className="container flex flex-col items-start justify-center px-4 md:px-[7.5rem] ">
            <CustomText title={title} subtitle={subtitle} text="Enter Your Location and Fetch Our Services" />
            <CustomInput placeholder="Zip Code" />
          </div>
          <div className="container flex items-center justify-center w-full gap-9">
            <div className="flex flex-col gap-9">
            <Box text="Dog Walking" image="/dog.svg" />
            <Box text="Overnight Care" image="/overnight.svg" />
            </div>
            <div className="flex flex-col gap-9">
            <Box text="Pet Sitting" image="/petsitting.svg" />
            <Box text="Other Services" image="/otherservices.svg" />
            </div>
          </div>
        </section>
    );
}

export default FlexibleComponent;