const projects = [
  {
    title: "Random Forest Fall Detection System",
    desc: "ESP32, MPU6050, Raspberry Pi & Python Flask — smart fall detection integrating sensors and ML for instant elderly safety alerts.",
    img: "/img3.jpg",
    link: "https://github.com/vasanthss-21",
  },
  {
    title: "IoT-Based Smart Laundry Management System",
    desc: "ESP32, RFID, Firebase real-time DB & CNN-based ML — end-to-end laundry tracking with RFID & camera-based cloth ID, SMS alerts and online payments. (Patented)",
    img: "/img4.jpg",
    link: "https://github.com/vasanthss-21",
  },
  // {
  //   title: "Plant Monitoring System",
  //   desc: "Designed a system to monitor environmental conditions and control water pump automatically or via IoT integration for sustainable agriculture.",
  //   img: "/img1.jpg",
  //   link: "https://github.com/vasanthss-21/Plant-Monitoring-System",
  // },
  {
    title: "Bus Reservation System",
    desc: "React.js, Spring Boot, MongoDB & Render — full-stack bus booking with RESTful APIs, efficient data storage and cloud deployment.",
    img: "/img8.jpg",
    link: "https://github.com/vasanthss-21/Bus-Reservation-JDBC",
  },
  {
    title: "Aquix – Scam Escape",
    desc: "Built an interactive web app raising awareness about online scams through quizzes and case-study based challenges.",
    img: "/img1.jpg",
    link: "https://github.com/vasanthss-21/Virtual-Lab",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col px-[5%] py-12 md:py-16 bg-white/[0.04]">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad mb-8 md:mb-10 animate-uptodown">Projects</h1>

      <div className="flex flex-wrap gap-6 md:gap-10 justify-center px-0 md:px-[5%]">
        {projects.map(({ title, desc, img, link }) => (
          <div
            key={title}
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex justify-center items-center rounded-2xl animate-float"
          >
            {/* Blurred glow behind image */}
            <div className="absolute w-full h-[52%] top-[14%] bg-[linear-gradient(45deg,#3498db,#2ecc71)] blur-[5px] -z-10 rounded"></div>

            {/* Project image */}
            <div
              className="absolute w-[98%] h-[50%] top-[15%] z-[1] transition-all duration-1000 bg-cover bg-center hover:scale-105"
              style={{ backgroundImage: `url('${img}')` }}
            ></div>

            {/* Info panel — group for hover reveal */}
            <div className="group absolute bottom-0 w-[90%] h-[45%] bg-[linear-gradient(45deg,#3498db,#2ecc71)] hover:bg-[linear-gradient(45deg,#2ecc71,#3498db)] flex flex-col justify-center items-center z-[2] rounded-2xl transition-all duration-1000 cursor-pointer">
              <h4 className="text-[#0c1022] text-[14px] sm:text-[16px] md:text-[18px] font-semibold px-2 text-center group-hover:text-[18px] md:group-hover:text-[22px] group-hover:px-[5%] transition-all duration-500">
                {title}
              </h4>
              <p className="px-[5%] md:px-[7%] text-[#0c1022] text-[10px] sm:text-[11px] md:text-[12px] text-justify mt-1 group-hover:hidden">
                {desc}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden group-hover:block text-white text-[24px] md:text-[30px] pt-2 no-underline"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
