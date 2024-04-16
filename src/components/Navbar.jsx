import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div id="nav" className="pb-20 md:pb-10 bg-black ">
    <nav className="w-full text-secondary bg-white fixed bg-black">
      <div className="mx-auto justify-between px-3 md:flex md:items-center lg:max-w-8xl bg-black">
        <div>
          <div className="flex items-center justify-between py-3 md:block text-white md:py-5 bg-black">
            <a href="#" >
              <h2 className="text-2xl sm:text-3xl bg-black hover:scale-125 hover:translate-x-5	 duration-500 ">
                <span className="font-bold bg-black">&lt;S</span>hivam
                <span className="font-bold bg-black">/&gt; </span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-700 focus:border-gray-400 rounded-md p-2 outline-none focus:border "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"} bg-black text-white`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 bg-black">
              <li className="bg-black">
                <Link className="hover:text-gray-600 font-bold text-lg bg-black"
                  to="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="hover:text-gray-600 font-bold text-lg bg-black">
                <Link
                  to="#project"
                  className=" text-secondary hover:text-primary bg-black" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-gray-600 font-bold text-lg bg-black">
                <Link
                  to="#skills"
                  className=" text-secondary hover:text-primary bg-black" onClick={() => setNavbar(!navbar)}>
                  Skills
                </Link>
              </li>
              <li className="hover:text-gray-600 font-bold text-lg bg-black">
                <a
                  href="https://drive.google.com/file/d/1D4_vZwpLx8o5XM_Bu5qeG78TqnlJIPik/view?usp=sharing"
                  className=" text-secondary hover:text-primary bg-black" onClick={() => setNavbar(!navbar)}
                  target="_blank"
                  >
                  Resume
                </a>
              </li>
              <li className="hover:text-gray-600 font-bold text-lg bg-black">
                <Link
                  to="#contact"
                  className=" text-secondary hover:text-primary bg-black" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
