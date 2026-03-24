import { motion } from "framer-motion";

const Story = () => {
  // Animasi teks keluar dari KIRI (untuk kotak hitam di sebelah kanan foto)
  const textFromPhotoLeft = {
    hidden: { opacity: 0, x: -100 }, // Mulai dari arah foto (kiri)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animasi teks keluar dari KANAN (untuk kotak hitam di sebelah kiri foto)
  const textFromPhotoRight = {
    hidden: { opacity: 0, x: 100 }, // Mulai dari arah foto (kanan)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="story" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* BARIS 1: FOTO DIAM (KIRI) */}
          <div className="aspect-video md:aspect-auto h-[300px] md:h-[400px]">
            <img
              className="w-full h-full object-cover block"
              src="/src/assets/purayehgangga.png"
              alt="pura yeh gangga"
            />
          </div>

          {/* TEKS MUNCUL DARI KIRI (SEOLAH KELUAR DARI FOTO) */}
          <div className="bg-black flex items-center justify-center p-8 md:p-12 overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={textFromPhotoLeft}
              className="text-center"
            >
              <h2 className="font-varela fw-bold text-xl md:text-2xl text-[#C7A767] mb-4">
                Di Mana Air dan Doa Bertemu
              </h2>
              <p className="font-nunito text-justify text-white leading-relaxed text-sm md:text-base">
                Pura Yeh Gangga hari ini tercatat sebagai salah satu dari lima
                situs Cagar Budaya peringkat provinsi di Bali, sebuah pengakuan
                resmi atas nilai sejarah, arkeologis, dan spiritual yang
                dikandungnya. Namun bagi masyarakat penyungsungnya, nilai
                tersebut telah jauh lebih dulu hidup—bahkan sebelum regulasi dan
                penetapan formal hadir.
              </p>
            </motion.div>
          </div>

          {/* BARIS 2: TEKS MUNCUL DARI KANAN (SEOLAH KELUAR DARI FOTO) */}
          <div className="bg-black flex items-center justify-center p-8 md:p-12 overflow-hidden order-2 md:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={textFromPhotoRight}
              className="text-center"
            >
              <h2 className="font-varela fw-bold text-xl md:text-2xl text-[#C7A767] mb-4">
                Toya iku urip
              </h2>
              <p className="font-nunito text-justify text-white leading-relaxed text-sm md:text-base">
                Di Yeh Gangga, air tidak hanya mengalir. Ia hadir sebagai pusat
                kehidupan, penghubung spiritual, dan sumber keberlanjutan alam.
                Setiap tetes air yang muncul dari mata air, mengalir melalui
                petirtaan, lalu menyatu ke sungai, membawa makna yang jauh
                melampaui fungsi fisiknya.
              </p>
            </motion.div>
          </div>

          {/* BARIS 2: FOTO DIAM (KANAN) */}
          <div className="aspect-video md:aspect-auto h-[300px] md:h-[400px] order-1 md:order-2">
            <img
              className="w-full h-full object-cover block"
              src="/src/assets/yehgangga2.png"
              alt="pura yeh gangga"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
