function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-opacity-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col items-center justify-center gap-9">
      <h1 className="text-4xl md:text-7xl font-extrabold font-comfortaa text-center md:text-left">Error 404</h1>
      <p className="text-lg md:text-2xl mb-8 text-center md:text-start">Página no encontrada</p>
    </div>
    <div>
        <img src="/dog-404.png" alt="Fetch Logo" className="w-[30rem]" />
    </div>
      </div>
    </div>
  );
}

export default NotFound; 