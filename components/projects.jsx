import Image from "next/image";
import { projects } from "./imagenes";


export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
           <a href="https://removex.com.pe/" target="_blank" rel="noopener noreferrer">
           Removex
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://removex.com.pe/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.removex} alt="Removex" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
           <a href="https://trainingcertification.pe/" target="_blank" rel="noopener noreferrer">
           Training Certification
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://trainingcertification.pe/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.training} alt="Training Certification" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
           <a href="https://luwydev.com/jjm/web2024/" target="_blank" rel="noopener noreferrer">
           JJ Mining
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://luwydev.com/jjm/web2024/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.jjmining} alt="JJ Mining" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
           <a href="https://serviciostecnicosenperu.com/" target="_blank" rel="noopener noreferrer">
           Termas Termotanques
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://serviciostecnicosenperu.com/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.servtecnicos} alt="Termas Termotanques" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a href="https://floreriabenavides.com.pe/" target="_blank" rel="noopener noreferrer">
            Florería Benavides
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://floreriabenavides.com.pe/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.florBenavides} alt="Florería Benavides" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a href="https://muebleriabianely.com/" target="_blank" rel="noopener noreferrer">
            Bianely
            </a>            
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://muebleriabianely.com/" target="_blank" rel="noopener noreferrer">
              <p className="text-white"> FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.Bianely} alt="Bianely" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a href="https://www.grubbasport.com/" target="_blank" rel="noopener noreferrer">
            Grubbasport
            </a>            
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://www.grubbasport.com/" target="_blank" rel="noopener noreferrer">
              <p className="text-white"> FrontEnd</p>
              </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.grubba} alt="GrubbaSport" />
      </div>
    </div>
  );
}
