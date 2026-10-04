import { useEffect, useRef } from "react";

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("visible");
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="w-full min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-[5%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-10"
    >
      {/* Left */}
      <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
        <div className="max-w-[700px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold animate-uptodown">
            Hi, I'm Vasanth
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-2 animate-lefttoright">
            Embedded Engineer, Web Developer
          </h3>
          <p className="text-sm sm:text-[15px] text-justify mt-3 animate-downtoup leading-relaxed">
            A technologist driven by curiosity and continuous learning, I specialize in web
            development, Java programming, and exploring diverse tech fields. I aim to tackle
            challenges and deliver impactful solutions.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { href: "https://www.linkedin.com/in/vasanth-s-s-800075291/", icon: "bxl-linkedin-square" },
            { href: "https://github.com/vasanthss-21",                     icon: "bxl-github" },
            { href: "https://www.instagram.com/_vasan.th_s.s_07/",         icon: "bxl-instagram" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-8 h-8 rounded-full bg-[linear-gradient(30deg,#3498db,#2ecc71)] text-white animate-float hover:bg-[linear-gradient(30deg,#2ecc71,#3498db)] transition-all text-base"
            >
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1PkwdBick3Eo_BKEV8MjMaxqV-78CwC-j/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex w-[200px] sm:w-[220px] md:w-[250px] h-10 sm:h-11 md:h-12 bg-[linear-gradient(45deg,#3498db,#2ecc71)] no-underline rounded-2xl text-sm sm:text-[15px] md:text-[17px] font-bold text-white justify-center items-center animate-float hover:bg-[linear-gradient(30deg,#2ecc71,#3498db)] transition-all duration-700"
        >
          Get My Resume here!
        </a>
      </div>

      {/* Right – animated circle */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <div className="relative w-[220px] h-[220px] sm:w-[280px]  sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[410px] lg:h-[410px] rounded-full bg-[linear-gradient(45deg,#3498db,#2ecc71)] flex justify-center items-center animate-float">
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(#3498db,#2ecc71)] ring-blur animate-circle-rot"></span>
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(#3498db,#2ecc71)] ring-blur animate-circle-rot"></span>
          <div className="w-[95%] h-[95%] bg-bg rounded-full animate-float flex justify-center items-center overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="img2.png"
                alt="Profile"
                className="block h-full absolute m-auto top-[-100%] right-[-100%] bottom-[-100%] left-[-100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
