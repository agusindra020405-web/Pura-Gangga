import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const text = `Di sebuah lembah hijau di wilayah Baturiti, Tabanan, aliran air mengukir lanskap sekaligus sejarah. Di tepi Tukad Yeh Gangga, berdiri sebuah pura tua yang telah menjadi saksi perjalanan spiritual Bali selama lebih dari enam abad. Pura Yeh Gangga bukan sekadar bangunan suci. Ia adalah titik temu antara alam, manusia, dan keyakinan—sebuah living monument yang masih berdenyut dalam kehidupan masyarakat hingga hari ini. Di sinilah air bukan hanya mengalir, tetapi dimuliakan. Mata air, beji, petirtaan, dan sungai menjadi bagian dari sistem spiritual yang menyatukan ritual, pertanian, dan keberlanjutan lingkungan. Setiap piodalan, setiap persembahyangan, setiap tetes tirta membawa makna yang diwariskan lintas generasi. Pura Yeh Gangga berdiri di wilayah Desa Perean, Kecamatan Baturiti, Kabupaten Tabanan, hanya sekitar 150 meter dari jalur utama Denpasar–Singaraja, namun tetap terjaga dalam suasana alam yang sejuk dan vegetatif. Letaknya yang berada di sempadan sungai menjadikannya unik: sebuah pura yang menyatu langsung dengan lanskap air suci. Buku ini mengajak pembaca menyusuri jejak tersebut—dari prasasti batu bertarikh abad ke-14, arsitektur sakral meru tumpang tujuh, hingga tantangan pelestarian di era modern. Lebih dari sekadar dokumentasi, ini adalah kisah tentang bagaimana warisan budaya tetap hidup di tengah perubahan zaman.`;

export default function TextHoverPerKata() {
  const words = text.split(" ");
  const scope = useRef(null);
  const isInView = useInView(scope, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="max-w-4xl mx-auto mt-8" ref={scope}>
      <div className="font-nunito text-justify text-lg md:text-xl leading-relaxed">
        {words.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.4,
                    delay: idx * 0.01, // Jeda antar kata
                  },
                },
              }}
              className="inline mr-1 transition-opacity duration-300 hover:text-[#C7A767] cursor-default"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
