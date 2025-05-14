import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

function Navigation() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={
          "fixed top-0 z-50 flex w-full items-center justify-between px-8 py-3 transition-all duration-500 " +
          (atTop ? "" : "bg-darkblack/50 backdrop-blur-xs")
        }
      >
        <img src={logo} alt="" className="w-20" />
        <ul className="flex gap-x-8">
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Over ons
            </a>
          </li>
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Portfolio
            </a>
          </li>
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
