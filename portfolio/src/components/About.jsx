export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center gap-6 px-[5%] sm:px-[8%] py-12 md:py-16 bg-white/[0.04]"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad animate-uptodown">
        About Me
      </h1>

      <p className="text-justify text-[13px] sm:text-sm md:text-[15px] leading-loose tracking-wide">
        Hi, I'm Vasanth S S, an Electronics and Communication Engineer with a strong foundation
        in embedded systems, IoT, and full-stack development. Through internships at Motherson
        Automotive Elastomers Technology, IITM Pravartak, Dot Com Infoway, and Kaivale
        Technologies, I have gained diverse exposure ranging from industrial automation with
        Siemens PLCs and embedded system design with sensors and smart devices to Java-based
        backend development, web integration, and SEO-driven digital marketing. My technical
        expertise covers Java, Python, C, Angular, React.js, Spring Boot, SQL, Firebase, Node.js,
        SystemVerilog, and IoT platforms (ESP32, Arduino), supported by tools like Xilinx Vivado,
        Proteus, Cadence, and Synopsys EDA. This mix of hardware and software knowledge enables
        me to design scalable, real-world applications that integrate performance with innovation.
      </p>

      <p className="text-justify text-[13px] sm:text-sm md:text-[15px] leading-loose tracking-wide">
        My projects demonstrate my commitment to automation, sustainability, and problem-solving.
        Notable works include an IoT-based Laundry Management System using ESP32 &amp; RFID for
        smart tracking and SMS updates, a Plant Monitoring System for sustainable agriculture,
        and an E-Commerce API using Spring Boot for efficient online operations. I have also
        designed Aquix, an interactive scam-awareness web app, and contributed to VLSI
        verification through a D Flip-Flop project using SystemVerilog and UVM. Beyond academics,
        I've been recognized as the Winner of Electrothon'24, a Finalist at FinTech-A-Thon 2025
        (NIT Trichy), and consistently excel in coding competitions with 500+ LeetCode problems
        solved (1700+ rating) and 100+ CodeChef contests (1400+ rating). Alongside technical
        pursuits, I contribute creatively as a graphic designer and coordinator for Chronicle
        Timez. With a passion for emerging technologies like Web3, advanced IoT, and sustainable
        solutions, I am eager to collaborate with innovators to build impactful, future-ready
        systems.
      </p>
    </section>
  );
}