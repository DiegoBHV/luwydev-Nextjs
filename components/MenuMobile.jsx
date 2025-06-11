"use client"
import { useEffect } from "react";
export const MenuMobile = () => {
  useEffect(() => {
    document.getElementById("mobile-control2").addEventListener("click", () => {
      const menu = document.getElementById("mobile-control2").classList;
      if (menu.value.includes("active-mnav-right")) {
        menu.remove("active-mnav-right");
        menu.add("close-mnav-right");
      } else {
        menu.add("active-mnav-right");
        menu.remove("close-mnav-right");
      }
    });
  });

  return (
    <div className="absolute right-5 lg:right-12">
      <div
        className="w-12 h-12 rounded-md flex justify-center items-center cursor-pointer close-mnav-right"
        id="mobile-control2"
      >
        <div className="relative z-40">
          <svg
            className="block fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
            height="2em"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>

          <ul className="list-none flex flex-col mt-0 bg-transparent absolute overflow-hidden pt-0 top-14 z-60 right-0 mobile-nav items-end">
            <a
              href="#home"
              className="side-menu text-lg font-medium delay-[50ms] text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600 rounded-tl-md"
            >
              <span className="w-full">Inicio</span>
            </a>
            <a
              href="#service"
              className="side-menu text-lg font-medium delay-[50ms] text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Servicios</span>
            </a>
            <a
              href="#about"
              className="side-menu text-lg font-medium delay-100 text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Sobre Mí</span>
            </a>
            <a
              href="#projects"
              className="side-menu text-lg font-medium delay-150 text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Portfolio</span>
            </a>

            <a
              href="#review"
              className="side-menu text-lg font-medium delay-200 text-white transition duration-500 px-5 py-3 w-52 border-b border-blue-500 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full h-full">Empresas</span>
            </a>
            <a
              href="#contact"
              className="side-menu text-lg font-medium delay-200 text-white transition duration-500 px-5 py-3 rounded-bl-md w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full h-full">Contacto</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
