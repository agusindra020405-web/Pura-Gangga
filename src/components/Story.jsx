const Story = () => {
  return (
    <section id="story" className="bg-gray-100 py-15 px-20">
      <div className="container px-4 px-lg-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          <div className="h-full">
            <img
              className="img-fluid"
              src="/src/assets/purayehgangga.png"
              alt="pura yeh gangga"
            />
          </div>

            <div className="bg-black text-center flex items-center justify-center align-items-center h-full">
              <div className="w-100 p-4">
                <h2 className="font-varela fw-bold text-xl text-[#C7A767]">
                  Di Mana Air dan Doa Bertemu
                </h2>
                <p className="font-nunito text-center text-justify text-white leading-relaxed">
                  Pura Yeh Gangga hari ini tercatat sebagai salah satu dari lima
                  situs Cagar Budaya peringkat provinsi di Bali, sebuah
                  pengakuan resmi atas nilai sejarah, arkeologis, dan spiritual
                  yang dikandungnya. Namun bagi masyarakat penyungsungnya, nilai
                  tersebut telah jauh lebih dulu hidup—bahkan sebelum regulasi
                  dan penetapan formal hadir.
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className="container px-4 px-lg-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
            <div className="bg-black text-center flex items-center justify-center align-items-center h-full">
              <div className="w-100 p-4">
                <h1 className="font-varela fw-bold text-xl text-[#C7A767]">
                  Toya iku urip
                </h1>
                <p className="font-nunito text-center text-justify text-white leading-relaxed">
                  Di Yeh Gangga, air tidak hanya mengalir. Ia hadir sebagai
                  pusat kehidupan, penghubung spiritual, dan sumber
                  keberlanjutan alam. Setiap tetes air yang muncul dari mata
                  air, mengalir melalui petirtaan, lalu menyatu ke sungai,
                  membawa makna yang jauh melampaui fungsi fisiknya.
                </p>
              </div>
            </div>
          <div className="h-full">
            <img
              className="img-fluid"
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
