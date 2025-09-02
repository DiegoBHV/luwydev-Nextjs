import Image from "next/image";
import { projects } from "./imagenes";

export default function ProjectsNext() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a
              href="http://shop-adminrts.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop React
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a
                href="http://shop-adminrts.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">
                  React19-TS, Vite, TanStack Table
                </p>
              </a>
            </li>
            <li className="text-blue-500 text-base font-medium">
              <a
                href="http://shop-adminrts.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">
                  Formik, Rest, i18n, Tailwind
                </p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.shopReact}
          alt="Shop React"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a
              href="https://luwydev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LuwyDev
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a
                href="https://luwydev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">NextJs15 CSR, SEO </p>
              </a>
            </li>
            <li className="text-blue-500 text-base font-medium">
              <a
                href="https://luwydev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">i18n, Tailwind</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.luwydev}
          alt="Luwy Dev"
        />
      </div>
    </div>
  );
}
