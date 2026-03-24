import { motion } from "framer-motion";
const Contact = () => {
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };
  return (
    <section
      id="contact"
      className="bg-black py-20 px-10 grid md:grid-cols-2 gap-10 items-center overflow-hidden"
    >
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInLeft}
        className="container px-4 px-lg-5"
      >
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-yellow-600 mb-2">
            Lokasi Pura Yeh Gangga
          </h1>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Temukan Pura Yeh Gangga yang berada pada sebuah hamparan lembah yang
            dibelah oleh aliran air sungai Gangga.
          </p>
        </div>

        <motion.div
          className="bg-gray-800/50 mt-8 p-6 rounded-lg max-w-6xl border border-gray-700"
          whileHover={{ scale: 1.02 }} // Sedikit interaksi saat di-hover
        >
          <h1 className="text-yellow-600 text-xl font-semibold mb-2">Alamat</h1>
          <p className="text-gray-300 leading-relaxed">
            Pura Yeh Gangga Pekraman Tengah, Perean, Kecamatan Baturiti,
            Kabupaten Tabanan, Bali 82191
          </p>
          <a
            href="https://maps.google.com" // Ganti dengan link asli
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-4 inline-block hover:text-yellow-500 transition-colors"
          >
            Buka Di Google Maps
          </a>
        </motion.div>
      </motion.div>

      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInRight}
      >
        <iframe
          className="shadow-2xl rounded-xl w-full border-2 border-gray-800"
          src="https://www.google.com/maps/embed?..." // Masukkan src embed asli anda
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
