function Box({ text, image }) {
  return (
    <div className="bg-white rounded-3xl text-center w-32 lg:w-60 h-32 md:h-60 flex flex-col justify-center items-center shadow-[0px_3px_6px_#00000029]">
      <div className="w-10 h-10 md:w-20 md:h-20 mx-auto">
        <img src={image} alt={text} className="w-full h-full" />
      </div>
      <h3 className=" mt-2 md:mt-4 text-lg md:text-2xl font-medium text-[#707070]">{text}</h3>
    </div>
  );
}

export default Box;