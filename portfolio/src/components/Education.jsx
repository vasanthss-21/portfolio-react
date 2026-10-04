export default function Education() {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-8 md:gap-10 px-[5%] py-12 md:py-20"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad animate-uptodown">Education</h1>

      <div className="flex justify-center w-full">
        <div className="flex items-center gap-5 md:gap-8 bg-white/5 border border-brand-blue/30 rounded-2xl px-5 md:px-10 py-6 md:py-8 max-w-[700px] w-full animate-float-med hover:border-brand-blue transition-colors duration-300 flex-col sm:flex-row text-center sm:text-left">
          {/* Icon */}
          <div className="flex justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[linear-gradient(45deg,#3498db,#2ecc71)] rounded-full flex-shrink-0">
            <i className="bx bxs-graduation text-[24px] md:text-[28px] text-white"></i>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              B.E. Electronics and Communication Engineering
            </h3>
            <h4 className="text-[13px] md:text-sm font-normal text-gray-400 mb-3">
              Chennai Institute of Technology, Chennai, Tamil Nadu
            </h4>
            <div className="flex gap-4 md:gap-6 text-[13px] md:text-sm flex-wrap justify-center sm:justify-start">
              <span className="flex items-center gap-1 text-brand-green">
                <i className="bx bx-calendar"></i> 2023 – 2027
              </span>
              <span className="flex items-center gap-1 text-brand-green">
                <i className="bx bx-star"></i> CGPA: 8.95 / 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
