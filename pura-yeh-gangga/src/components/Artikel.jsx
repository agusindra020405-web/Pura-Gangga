const artikelData = [
  {
    tanggal: "16 Desember 2025",
    penulis: "I Wayan Gede Yadnya Tenaya dan Putu Lila Wistara",
    judul: "Ragam Tinggalan di Pura Yeh Gangga dan Nilai Pentingnya",
    deskripsi: "Mengulas 59 warisan budaya kebendaan yang tersebar di situs, dari Meru tumpang tujuh hingga ceruk pertapaan kuno.",
  },
  {
    tanggal: "9 Desember 2025",
    penulis: "Giri Prayoga",
    judul: "Pengaturan Ruang (Zonasi) Situs Cagar Budaya Pura Yeh Gangga",
    deskripsi: "Prinsip dan hasil penentuan zonasi situs sebagai upaya perlindungan sekaligus peluang peningkatan kesejahteraan masyarakat.",
  },
  {
    tanggal: "2 Desember 2025",
    penulis: "I Wayan Gede",
    judul: "Lintas Sejarah dan Upaya Pelestarian di Pura Yeh Gangga",
    deskripsi: "Menelusuri perjalanan sejarah panjang Pura Yeh Gangga sejak abad ke-14 dan rangkaian upaya pelestariannya hingga kini.",
  },
];

const Artikel = () => {
  return (
    <section id="artikel" className="bg-gray-100 py-50 px-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-15">
          <div className="text-xl font-light text-[#C7A767] tracking-wide mb-3">
            <h1 className="font-semibold">Artikel</h1>
            <p className="text-sm text-gray-600 max-w-xl text-xl">
              Kumpulan tulisan seputar sejarah, air suci, dan kehidupan di
              sekitar Pura Yeh Gangga.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm mb-2">
              Menampilkan 3 dari 4 artikel
            </p>

            <button className="bg-teal-600 text-white text-sm px-3 py-1 rounded-lg shadow hover:bg-teal-700 transition">
              LIHAT SEMUA ARTIKEL
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artikelData.map((artikel, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-500 text-sm mb-3">
                {artikel.tanggal} • oleh {artikel.penulis}
              </p>

              <h3 className="text-yellow-600 text-xl mb-3">{artikel.judul}</h3>

              <p className="text-gray-600 mb-6">{artikel.deskripsi}</p>

              <a href="#" className="text-teal-600 underline">
                Baca selengkapnya
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artikel;
