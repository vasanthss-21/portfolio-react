const usefulLinks = [
  { href: "https://leetcode.com/u/vasanthss_21/",           label: "Leetcode" },
  { href: "https://www.codechef.com/users/vasanthss_07",    label: "Codechef" },
  { href: "https://www.hackerrank.com/profile/vasanthsankar21", label: "Hackerrank" },
  { href: "https://codeforces.com/profile/vasanthss_21",    label: "Codeforces" },
  { href: "https://unstop.com/u/vasans9357",                label: "Unstop" },
];

const socialLinks = [
  { href: "https://github.com/vasanthss-21/",                            label: "GitHub" },
  { href: "https://www.linkedin.com/in/vasanth-s-s-800075291",           label: "LinkedIn" },
  { href: "https://www.instagram.com/_vasan.th_s.s_07/",                 label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=61552656686522",      label: "Facebook" },
  { href: "https://x.com/_vasanth_ss_07",                                label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-center items-start gap-8 md:gap-[20%] px-[5%] py-[8%] md:py-[5%] flex-col md:flex-row flex-wrap gap-y-8">

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold py-2 md:py-3 text-[13px] md:text-sm">Useful Links</h4>
          <div className="flex flex-col gap-1">
            {usefulLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[#757575] text-[12px] md:text-[13px] hover:text-grad transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Follow Me */}
        <div>
          <h4 className="text-white font-semibold py-2 md:py-3 text-[13px] md:text-sm">Follow Me</h4>
          <div className="flex flex-col gap-1">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[#757575] text-[12px] md:text-[13px] hover:text-grad transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Get in Touch */}
        <div className="w-full md:max-w-[500px] p-4 md:p-5 border border-gray-600 rounded-lg bg-bgalt">
          <h4 className="text-white font-semibold text-[13px] md:text-sm mb-3">Get in Touch</h4>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="  Your Name"
              required
              className="w-full p-2 border border-gray-400 rounded text-[12px] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue"
            />
            <input
              type="email"
              name="email"
              placeholder="  Your Email"
              required
              className="w-full p-2 border border-gray-400 rounded text-[12px] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue"
            />
            <input
              type="text"
              name="message"
              placeholder="  Message"
              required
              className="w-full p-2 border border-gray-400 rounded text-[12px] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white border-none rounded text-[12px] py-1 cursor-pointer hover:bg-blue-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-500 text-[12px] md:text-[13px] py-3 md:py-4">
        Copyright &copy; 2023 Vasanth S S. All rights reserved.
      </p>
    </footer>
  );
}
