const achievements = [
  {
    icon: "bx bxs-award",
    title: "Patent Granted",
    desc: 'Patent granted for "IoT-based Smart Laundry Management System" IN202345678(2025), tracking clothes via RFID & SMS Technology.',
  },
  {
    icon: "bx bxs-trophy",
    title: "Winner – Electrothon'24",
    desc: "Won Electrothon'24 hackathon held at Chennai Institute of Technology in November 2024.",
  },
  {
    icon: "bx bxs-medal",
    title: "Finalist – FinTech-A-Thon 2025",
    desc: "Finalist in FinTech-A-Thon held on February 2025 at NIT, Trichy.",
  },
  {
    icon: "bx bxs-medal",
    title: "Finalist – UnPlugged 2.0",
    desc: "Finalist in UnPlugged 2.0 held on March 2025 at Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center gap-8 md:gap-12 px-[5%] py-12 md:py-20 bg-white/[0.04]"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad animate-uptodown">Achievements</h1>

      <div className="flex flex-col gap-4 md:gap-5 max-w-[900px] w-full ">
        {achievements.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-4 md:gap-5 bg-[#0c1022] border border-brand-green/50 rounded-2xl px-4 md:px-7 py-4 md:py-5 animate-float-slow hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 flex-col sm:flex-row sm:items-start"
          >
            {/* Icon */}
            <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-[linear-gradient(45deg,#3498db,#2ecc71)] rounded-full flex-shrink-0">
              <i className={`${icon} text-[18px] md:text-[22px] tet-white`}></i>
            </div>
            {/* Text */}
            <div className="text-center sm:text-left">
              <h4 className="text-[14px] md:text-[16px] font-semibold mb-1 text-grad">{title}</h4>
              <p className="text-[12px] md:text-[13px] leading-relaxed text-gray-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
