import TextHover from './TextHover';
const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="absolute bottom-0 w-full from-transparent via-black/60 to-black"></div>

        <div className="mt-16 text-center space-y-8">
          <h2 className="font-varela text-3xl md:text-5xl tracking-tight leading-tight">
            Jejak Air Suci & Asa Mewarisi Kehidupan
          </h2>

          <div className="font-nunito text-justify text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto space-y-6">
            <TextHover></TextHover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
