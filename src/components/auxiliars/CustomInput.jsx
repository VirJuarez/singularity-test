function CustomInput({ placeholder }) {
    return (
        <div class="relative">
        <input type="search" id="search" class="block w-full p-6 ps-9 text-md md:text-2xl  text-gray-900 border border-gray-300 rounded-full bg-white shadow-[0px_3px_6px_#00000029]" placeholder={placeholder} required />
        <button type="submit" class="text-white absolute end-2 bottom-2.5 w-16 h-16 bg-orange-600 text-2xl rounded-full py-1 px-1">➜</button>
    </div>
    );
}

export default CustomInput;