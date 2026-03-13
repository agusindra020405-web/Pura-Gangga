import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Navbar />

      {/*Background Image dengan Overlay Gelap */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/hero.png" 
          alt="Pura Yeh Gangga"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      </div>
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <span className="mb-2 text-sm font-medium tracking-[0.3em] uppercase opacity-80">
          Wisata Budaya & Spiritual
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter drop-shadow-2xl text-brown-100">
          PURA YEH GANGGA
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed opacity-90">
          Jejak Air Suci & Asa Mewarisi Kehidupan
        </p>

       {/* Ikon Panah Down */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white/50 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
      </div>
    </section>
  );
};

export default Header;
