const Contact = () => {
  return (
    <section id="contact" className="bg-black py-15 px-20 grid md:grid-cols-2 gap-10 items-center">
      <div className="container px-4 px-lg-5">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-yellow-600 ">
            Lokasi Pura Yeh Gangga
          </h1>
          <p className="text-gray-400 max-w-md leading-relaxed ">
            Temukan Pura Yeh Gangga yang berada pada sebuah hamparan lembah yang
            dibelah oleh aliran air sungai Gangga.
          </p>
        </div>

        <div className="bg-gray-600 mt-8 p-3 rounded-lg  max-w-6xl ">
          <div>
            <h1 className="text-yellow-600 text-xl leading-relaxed ">Alamat</h1>
            <p className="text-gray-300">
              Pura Yeh Gangga Pekraman Tengah, Perean, Kecamatan Baturiti
              Kabupaten Tabanan, Bali 82191
            </p>
            <a 
            href="https://maps.app.goo.gl/2xejExdbfeVMfNzXA"
            target="_blank"
            className="text-white underline mt-4 inline-block rounded-lg">
              Buka Di Google Maps
              </a>
          </div>
        </div>
      </div>
      <div>
        <iframe
        className="shadow-lg rounded-lg w-full "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7185753516756!2d115.19452367551673!3d-8.42927359161009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2238cd2871ba5%3A0xc80a04169a7b3feb!2sPura%20Yeh%20Gangga!5e0!3m2!1sid!2sid!4v1773466494301!5m2!1sid!2sid"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
