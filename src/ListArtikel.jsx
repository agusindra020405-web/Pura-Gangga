import { Link } from "react-router-dom";
import heroImg from "./assets/hero.png";

const artikelData = [
  {
    tanggal: "16 Desember 2025",
    penulis: "I Wayan Gede Yadnya Tenaya dan Putu Lila Wistara",
    judul: "Ragam Tinggalan di Pura Yeh Gangga dan Nilai Pentingnya",
    deskripsi:
      "Mengulas 59 warisan budaya kebendaan yang tersebar di situs, dari Meru tumpang tujuh hingga ceruk pertapaan kuno.",
  },
  {
    tanggal: "9 Desember 2025",
    penulis: "Giri Prayoga",
    judul: "Pengaturan Ruang (Zonasi) Situs Cagar Budaya Pura Yeh Gangga",
    deskripsi:
      "Prinsip dan hasil penentuan zonasi situs sebagai upaya perlindungan sekaligus peluang peningkatan kesejahteraan masyarakat.",
  },
  {
    tanggal: "2 Desember 2025",
    penulis: "I Wayan Gede",
    judul: "Lintas Sejarah dan Upaya Pelestarian di Pura Yeh Gangga",
    deskripsi:
      "Menelusuri perjalanan sejarah panjang Pura Yeh Gangga sejak abad ke-14 dan rangkaian upaya pelestariannya hingga kini.",
  },
];

const ListArtikel = () => {
  return (
    <>
      <section
        id="ListArtikel"
        className="relative h-screen w-full overflow-hidden "
      >
        
        {/* Background Image dengan Overlay Gelap */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Pura Yeh Gangga"
            className="h-full w-full object-cover scale-110 hover:scale-125 transition-transform duration-[4000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-[#C7A767]">
          <h1 className="font-varela text-6xl md:text-8xl font-bold tracking-[0.2em] drop-shadow-2xl opacity-100 animate-fadeup will-change-transform">
            ARTIKEL
          </h1>
          <p
            className="mt-6 max-w-2xl font-nunito text-xl md:text-xl leading-relaxed opacity-90 animate-fadeup will-change-transform"
            style={{ animationDelay: "0.3s" }}
          >
            Cerita, catatan, dan refleksi dari Yeh Gangga.
          </p>
          <div className="text-right">
            <a
              href="#listartikel"
              className="font-varela inline-block bg-teal-600 text-white text-sm px-5 py-5 rounded-lg shadow hover:bg-teal-700 transition tracking-widest mt-5"
            >
              JELAJAHI ARTIKEL
            </a>
          </div>

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

      <section id="listartikel" className="bg-gray-100 py-50 px-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="font-light text-[#C7A767] tracking-wide mb-3 text-center">
            <h1 className="font-semibold text-3xl">Semua Artikel</h1>
            <p className="text-xl text-gray-600 mx-auto max-w-lg mb-8 mt-3">
              Halaman ini memuat kumpulan artikel pendek yang mendokumentasikan
              sejarah, praktik ritual, dan kehidupan keseharian di sekitar Pura
              Yeh Gangga.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {" "}
            {/* Ganti dari md:grid-cols-3 ke grid-cols-1 untuk vertikal */}
            {artikelData.map((artikel, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <p className="text-gray-500 text-sm mb-3">
                  {artikel.tanggal} • oleh {artikel.penulis}
                </p>

                <h3 className="text-yellow-600 text-xl mb-3">
                  {artikel.judul}
                </h3>

                <p className="text-gray-600 mb-6">{artikel.deskripsi}</p>

                <a href="#" className="text-teal-600 underline">
                  Baca selengkapnya
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListArtikel;
