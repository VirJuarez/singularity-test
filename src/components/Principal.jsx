function Principal() {
  return (
    <div className="relative max-w-screen min-h-screen md:h-[700px] mb-10">
      {/* SVG Background Container */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full "
          viewBox="0 0 900 430"
          preserveAspectRatio="xMinYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="scale(-1, 1) translate(-900, 0)">
            <path d="M0 139L37.5 134.8C75 130.7 150 122.3 225 157.7C300 193 375 272 450 329.3C525 386.7 600 422.3 675 425.3C750 428.3 825 398.7 862.5 383.8L900 369L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#fb923c"></path>
            <path d="M0 105L37.5 97.5C75 90 150 75 225 87.5C300 100 375 140 450 185.7C525 231.3 600 282.7 675 290C750 297.3 825 260.7 862.5 242.3L900 224L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#f37724"></path>
            <path d="M0 138L37.5 144.2C75 150.3 150 162.7 225 149.2C300 135.7 375 96.3 450 69.3C525 42.3 600 27.7 675 48.7C750 69.7 825 126.3 862.5 154.7L900 183L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#ea580c"></path>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full px-4 md:px-0 grid grid-cols-1 md:grid-cols-2">
        <div className="text-white flex flex-col justify-start md:justify-center gap-9 items-center md:items-start px-1 md:mx-28 py-10 md:py-0">
          <h1 className="text-4xl md:text-7xl font-extrabold font-comfortaa text-center md:text-left">We Get Pet Care!</h1>
          <p className="text-lg md:text-2xl mb-8 text-center md:text-start">
            For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 md:gap-10">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-6 rounded-full font-bold text-xl transition duration-300 ease-in-out">
              Schedule Service
            </button>
            <p className="text-md md:text-xl text-center">Or Call 866.338.2463</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="./dog1-yellowcircle.png" className="h-52 md:h-[600px]" alt="Dog"></img>
        </div>
      </div>
    </div>
  );
}

export default Principal;