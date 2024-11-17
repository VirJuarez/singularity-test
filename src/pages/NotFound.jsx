function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 ">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src="/dog-404.png" alt="Fetch Logo" className="w-40 md:w-[30rem]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-7 m-10">
                    <h1 className="text-4xl md:text-7xl font-extrabold font-comfortaa text-center md:text-left">Error 404</h1>
                    <p className="text-lg md:text-2xl mb-8 text-center md:text-start">Página no encontrada</p>
                </div>

            </div>
        </div>
    );
}

export default NotFound; 