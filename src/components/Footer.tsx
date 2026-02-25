import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const socials = [
    {
      id: 1,
      name: "GitHub",
      url: "github.com",
      icons: <IoLogoGithub />,
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "linkedin.com",
      icons: <IoLogoLinkedin />,
    },
  ];
  return (
    <footer className=" flex items-center justify-between px-4 lg:px-8 py-2">
      <div className=" flex flex-col text-xs font-black">
        <span className=" text-[#757575]">Copyright:</span>
        <span>All Rights Reserved©2026</span>
      </div>
      <div className=" flex flex-col text-xs font-bold">
        <span className="text-[#757575]">Fast Travel:</span>
        <button className=" cursor-pointer" onClick={() => scrollToTop()}>
          Go Back to Top
        </button>
      </div>
      <div>
        <span className=" text-xs font-bold text-[#757575]">Socials:</span>
        <span className=" flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icons}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}
