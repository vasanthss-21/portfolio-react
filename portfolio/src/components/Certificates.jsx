const certificates = [
  "Comprehensive Electronics and Embedded Systems (IITM Pravartak)",
  "Introduction To Industry 4.0 And Industrial Internet of Things (NPTEL)",
  "Semiconductors - VLSI & Embedded Systems (Maven Silicon)",
  "IoT Cloud Engineer Virtual Internship (Eduskills)",
  "Embedded System Interfacing with Smart Sensors (CODE, IITMadras)",
  "RISC-V Processor – RV321 Base ISA (Maven Silicon)",
  "Embedded Systems Developer Virtual Internship (Eduskills)",
  "Inheritance and Data Structures in Java (Coursera)",
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center gap-8 md:gap-12 px-[5%] py-12 md:py-20"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad animate-uptodown">Certificates</h1>

      <div className="flex flex-wrap gap-4 md:gap-5 justify-center max-w-[1100px] w-full">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="flex items-start gap-3 md:gap-4 bg-white/[0.04] border border-brand-blue/25 rounded-xl p-3 md:p-4 w-full md:w-[calc(50%-10px)] animate-float-slow hover:border-brand-green hover:-translate-y-1 transition-all duration-300"
          >
            {/* Badge icon */}
            <div className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 bg-[linear-gradient(45deg,#3498db,#2ecc71)] rounded-lg flex-shrink-0">
              <i className="bx bxs-badge-check text-[18px] md:text-[20px] text-white"></i>
            </div>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-gray-300">{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
