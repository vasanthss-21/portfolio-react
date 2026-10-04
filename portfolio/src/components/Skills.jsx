const skills = [
  { src: "pi.png",       alt: "Raspberry Pi" },
  { src: "esp.png",      alt: "ESP32" },
  { src: "arduino.png",  alt: "Arduino" },
  { src: "java.png",     alt: "Java" },
  { src: "python.png",   alt: "Python" },
  { src: "c.png",        alt: "C" },
  { src: "react.png",    alt: "React" },
  { src: "tailwind.png", alt: "Tailwind CSS" },
  { src: "mongodb.png",  alt: "MongoDB" },
  { src: "sql.png",      alt: "SQL" },
  { src: "ltspice.png",  alt: "LTSpice" },
  { src: "proteus.png",  alt: "Proteus" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 md:gap-12 w-full px-[5%] py-12 md:py-16"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad animate-uptodown">Technologies</h1>

      <div className="flex flex-wrap gap-5 sm:gap-8 md:gap-12 lg:gap-16 justify-center animate-float-med">
        {skills.map(({ src, alt }) => (
          <div
            key={alt}
            className="relative w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-[linear-gradient(45deg,#3498db,#2ecc71)] rounded-full flex justify-center items-center animate-float"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(#3498db,#2ecc71)] ring-blur animate-circle-rot-fast"></span>
            <div className="relative w-[90%] h-[90%] bg-bg rounded-full flex justify-center items-center animate-float z-10">
              <img
                src={src}
                alt={alt}
                className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] block"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
