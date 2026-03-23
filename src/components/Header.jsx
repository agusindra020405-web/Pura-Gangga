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
          className="h-full w-full object-cover scale-110 hover:scale-125 transition-transform duration-[4000ms] ease-out"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-[#C7A767]">
        <h1 className="font-varela text-6xl md:text-8xl font-bold tracking-[0.2em] drop-shadow-2xl animate-bounc">
          YEH GANGGA
        </h1>
        <p className="mt-6 max-w-2xl font-nunito text-xl md:text-xl leading-relaxed opacity-90 animate-fadeup delay-300">
          Jejak Air Suci & Asa Mewarisi Kehidupan
        </p>

        {/* Ikon Panah Down */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white/50 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Header;
