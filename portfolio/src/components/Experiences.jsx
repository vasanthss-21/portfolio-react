const experiences = [
  {
    role: "Technical Intern",
    company: "Motherson Automotive Elastomers Technology",
    date: "May 2025 – Jun 2025",
    desc: "Gained practical knowledge in configuring Siemens S7-1200 PLC and HMI interfaces for industrial automation and fault analysis. Studied 3+ industrial moulding processes including injection and compression methods, reducing process ramp-up time by 50%.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="30" stroke="url(#g1)" strokeWidth="1.5" opacity=".4"/>
        <rect x="29" y="44" width="7" height="14" rx="1.5" fill="url(#g1)"/>
        <rect x="41" y="36" width="7" height="22" rx="1.5" fill="url(#g1)"/>
        <rect x="17" y="50" width="7" height="8" rx="1.5" fill="url(#g1)"/>
        <polyline points="20,36 32,24 44,32 62,16" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="57,16 62,16 62,21" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    role: "Embedded Systems Trainee",
    company: "IITM & IITM Pravartak",
    date: "Dec 2024 & Jun 2025",
    desc: "Completed 5+ working hardware prototypes achieving sub-10ms sensor response latency across real-time IoT test scenarios. Executed real-time data acquisition using GPIO, ADC and communication protocols I2C, UART on embedded platforms.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" stroke="url(#g2)" strokeWidth="1.8"/>
        <circle cx="40" cy="40" r="10" stroke="url(#g2)" strokeWidth="1.8"/>
        <circle cx="40" cy="40" r="3" fill="url(#g2)"/>
        <line x1="40" y1="8" x2="40" y2="29" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="68" y1="24" x2="51" y2="34" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="68" y1="56" x2="51" y2="47" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="40" y1="72" x2="40" y2="52" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="12" y1="56" x2="29" y2="47" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="12" y1="24" x2="29" y2="34" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    role: "Web Development Intern",
    company: "Dot Com Infoway",
    date: "Nov 2024 – Dec 2024",
    desc: "Built 3+ full-stack web applications, reducing API response time by 30% through optimized backend-frontend integration. Created a responsive interface with React.js, HTML, CSS, JavaScript, improving consistency by 80% and browser compatibility.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <text x="8" y="54" fontFamily="monospace" fontSize="40" fontWeight="700" fill="url(#g3)">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    role: "SEO / Digital Marketing Intern",
    company: "Kaivale Technologies",
    date: "May 2024 – Jun 2024",
    desc: "Improved website organic reach by 35% through targeted SEO strategies, keyword analysis and data-driven optimizations. Utilized 5+ SEO tools for on-page optimization, improving content ranking by 40% and boosting overall search visibility metrics.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle cx="34" cy="34" r="18" stroke="url(#g4)" strokeWidth="2.2"/>
        <circle cx="34" cy="34" r="8" stroke="url(#g4)" strokeWidth="1.5" opacity=".5"/>
        <line x1="47" y1="47" x2="64" y2="64" stroke="url(#g4)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="28" y1="34" x2="40" y2="34" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="34" y1="28" x2="34" y2="40" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="px-[10%] pt-12 pb-12 md:pb-16 bg-white/[0.04]">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad mb-10 animate-uptodown">
        Experience
      </h1>

      <div className="flex flex-col gap-10">
        {experiences.map(({ role, company, date, desc, icon }, index) => {
          const isOdd = index % 2 === 0; // 0,2 → icon left | 1,3 → icon right

          return (
            <div key={role} className="flex flex-col gap-8">
              <div
                className={`flex items-center gap-10 flex-col ${
                  isOdd ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_32px_rgba(34,211,238,0.1)] animate-float-med">
                  {icon}
                </div>

                {/* Text */}
                <div className="flex-1 text-justify">
                  <h4 className="text-base md:text-lg font-semibold mb-1">
                    {role} —{" "}
                    <span className="text-grad">{company}</span>
                  </h4>
                  <span className="block text-[12px] md:text-[13px] text-brand-green mb-3">
                    {date}
                  </span>
                  <p className="text-[13px] md:text-[15px] text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Divider — skip after last card */}
              {index < experiences.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}