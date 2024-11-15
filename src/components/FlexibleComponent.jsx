import CustomInput from "./auxiliars/CustomInput";
import Box from "./auxiliars/Box";
import CustomText from "./auxiliars/CustomText";
import { sub } from "framer-motion/client";

function FlexibleComponent({title, subtitle}){
    return (
        <section className="min-h-screen max-w-screen py-8 md:py-16 flex flex-col items-start md:grid md:grid-cols-2 gap-8 bg-transparent">
          <div className="container flex flex-col items-start justify-center px-4 md:px-[7.5rem] ">
            <CustomText title={title} subtitle={subtitle} text="Enter Your Location and Fetch Our Services" />
            <CustomInput placeholder="Zip Code" />
          </div>
          <div className="flex items-center justify-center w-full gap-9">
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