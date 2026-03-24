import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const Artikel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="artikel" className="bg-gray-100 py-50 px-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12"
        >
          <div className="tracking-wide">
            <h1 className="font-semibold text-[#C7A767] text-2xl mb-2">
              Artikel
            </h1>
            <p className="text-gray-600 max-w-xl text-lg italic">
              Kumpulan tulisan seputar sejarah, air suci, dan kehidupan di
              sekitar Pura Yeh Gangga.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-gray-500 text-sm mb-2">
              Menampilkan 3 dari 4 artikel
            </p>
            <Link
              to="/ListArtikel"
              className="inline-block bg-teal-600 text-white text-xs font-bold tracking-widest px-6 py-2 rounded-full shadow-md hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300"
            >
              LIHAT SEMUA ARTIKEL
            </Link>
          </div>
        </motion.div>

        {/* Grid Kartu dengan Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {artikelData.map((artikel, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-8 rounded-xl shadow-sm border border-transparent hover:border-[#C7A767]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-400 text-xs mb-4 font-nunito uppercase tracking-tighter">
                  {artikel.tanggal} • {artikel.penulis}
                </p>
                <h3 className="text-[#C7A767] font-varela font-bold text-xl mb-4 leading-tight">
                  {artikel.judul}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {artikel.deskripsi}
                </p>
              </div>

              <Link
                to="#"
                className="text-teal-600 text-sm font-bold flex items-center group"
              >
                Baca selengkapnya
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

       
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/ListArtikel"
            className="text-teal-600 font-bold border-b-2 border-teal-600"
          >
            LIHAT SEMUA ARTIKEL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
