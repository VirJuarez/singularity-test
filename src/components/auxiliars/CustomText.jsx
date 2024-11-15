function CustomText({ title, subtitle, text }) {
    return (
        <div>
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-orange-600 ">{title}</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-md md:text-2xl font-open-sans opacity-80">
              {subtitle}
            </p>
            
            <div className="mb-6 md:mb-8">
              <p className="text-orange-600 font-bold text-md md:text-2xl ">
                {text}
              </p>
            </div>
        </div>
    );
}

export default CustomText;