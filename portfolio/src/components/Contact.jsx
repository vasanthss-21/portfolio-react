const contactLinks = [
  {
    href: "tel:+918807005389",
    icon: "bx bxs-phone-call",
    label: "+91 8807005389",
  },
  {
    href: "mailto:vasanthsankar21@gmail.com",
    icon: "bx bxs-envelope",
    label: "vasanthsankar21@gmail.com",
  },
  {
    href: "https://wa.me/918807005389",
    icon: "bx bxl-whatsapp",
    label: "Whatsapp Me!",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg px-[5%] md:px-[10%] min-h-[400px] md:min-h-[600px] w-full flex flex-col justify-center items-center py-12 md:py-16"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-grad mb-8 md:mb-12 animate-uptodown">Contact</h1>

      <table className="mt-3 md:mt-5">
        <tbody>
          {contactLinks.map(({ href, icon, label, external }) => (
            <tr key={label}>
              <td className="pb-3 md:pb-4 pr-3 md:pr-4">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex justify-center items-center w-[30px] h-[30px] md:w-[35px] md:h-[35px] bg-[linear-gradient(to_right,#3498db,#2ecc71)] rounded-[5px] text-white transition-all duration-1000 hover:bg-[linear-gradient(45deg,#2ecc71,#3498db)] hover:text-bg text-[20px] md:text-[25px]"
                >
                  <i className={icon}></i>
                </a>
              </td>
              <td>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="no-underline text-white text-[13px] md:text-[15px] hover:text-grad transition-all"
                >
                  {label}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
