function Principal(){
    return (
        <div className="relative min-h-screen md:h-[700px] bg-cover bg-center" >
          <div className="absolute inset-0  grid grid-cols-1 md:grid-cols-2">
            <div className="text-white flex flex-col justify-start mdjustify-center gap-9 items-center md:items-start px-1 md:mx-28 py-10 md:py-0">
              <h2 className="text-4xl md:text-7xl font-extrabold font-comfortaa text-center md:text-left">We Get Pet Care!</h2>
              <p className="text-lg md:text-2xl mb-8 text-center md:text-start">
                For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 md:gap-10">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-6 rounded-full font-bold text-xl ">
                  Schedule Service
                </button>
                <p className="text-md md:text-xl text-center">Or Call 866.338.2463</p>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <img src="./dog1-yellowcircle.png" className="absolute h-[600px]" alt="Dog"></img>
            </div>
          </div>
        </div>
    );
}

export default Principal;