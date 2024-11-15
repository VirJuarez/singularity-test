import Box from './auxiliars/Box';
import CustomInput from './auxiliars/CustomInput';
import CustomText from './auxiliars/CustomText';

function HowItWorks() {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-0  w-full max-w-xl m-auto">
        {/* SVG for curved dashed lines */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First curved line (Reserve to Match) */}
          <path
            d="M 30 80 A 150 150 0 0 1 300 200"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          {/* Second semicircular line (Relax to Match) */}
          <path
            d="M 30 320 A 150 150 0 0 0 300 200"
            stroke="#FF6B6B"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>

        {/* Boxes */}
        <div className="flex justify-start z-10">
          <Box text="Reserve" image="/reserve.svg" />
        </div>
        
        <div className="flex justify-end z-10">
          <Box text="Match" image="/match.svg" />
        </div>
        
        <div className="flex justify-start z-10">
          <Box text="Relax" image="/relax.svg" />
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-start justify-start px-4 py-8 md:px-[7.5rem]">
        <CustomText 
          title="How it Works" 
          subtitle="Because finding a good pet sitter shouldn't be a hassle. With Fetch! It's as easy as…" 
          text="Enter Your Location and Fetch Our Services" 
        />
        <CustomInput placeholder="Zip Code" />
      </div>
    </section>
  );
}

export default HowItWorks;