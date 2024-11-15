import js from "@eslint/js";

function JoinNow(){
    return (
        <div className=" text-white py-12 px-8">
          <div className="max-w-6xl mx-auto border border-white rounded-3xl p-8 flex gap-8 bg-blue-500 ">
            <div className="w-1/2 hidden md:block">
                <img src="./dog2-yellowcircle.png" className="w-full"/>
            </div>
            <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-yellow-400 ">Make Fetch! Happen</h2>
            <p className="text-md md:text-2xl mb-8">
              If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every team member and provide ongoing support to help you get the most from your work.
            </p>
            <button className="bg-white shadow-[0px_3px_6px_#00000029] hover:bg-yellow-200 text-orange-500 px-11 py-6 rounded-full font-bold text-xl">
              Join Now
            </button>
            </div>
          </div>
        </div>
      );
}

export default JoinNow
;