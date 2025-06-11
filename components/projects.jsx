import Image from "next/image";
import { projects } from "./imagenes";


export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a href="https://www.yanbal.com/mx//corporate/" target="_blank" rel="noopener noreferrer">
            Yanbal
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a href="https://www.yanbal.com/mx//corporate/" target="_blank" rel="noopener noreferrer">
              <p className="text-white"> SAP Commerce <br></br> Composable Store Front (Spartacus)</p>
              </a>
              
            </li>
            <li className="text-blue-500 text-base font-medium">
              <a href="https://www.yanbal.com/mx//corporate/" target="_blank" rel="noopener noreferrer">
              <p className="text-white">Front: JSP, JS, Angular, <br></br>Jquery, CSS</p>
              </a>
              
            </li>
          </ul>
        </div>
        <Image className="w-full rounded-lg" src={projects.project6} alt="Yanbal" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a href="https://www.somosbelcorp.com/" target="_blank" rel="noopener noreferrer">
            Belcorp
            </a>            
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
            <a href="https://www.somosbelcorp.com/" target="_blank" rel="noopener noreferrer">
            <p className="text-white"> JavaScript, HTML, <br></br>FrontEnd Visual .NET, <br></br>CSS, Mailing</p>
            </a>
            </li>
          </ul>          
        </div>
        <Image className="w-full rounded-lg" src={projects.project1} alt="Belcorp Mailing" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
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
        <Image className="w-full rounded-lg" src={projects.project2} alt="Removex" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
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
        <Image className="w-full rounded-lg" src={projects.project3} alt="Florería Benavides" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
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
        <Image className="w-full rounded-lg" src={projects.project4} alt="Bianely" />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950 bg-opacity-80">
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
        <Image className="w-full rounded-lg" src={projects.project5} alt="GrubbaSport" />
      </div>
    </div>
  );
}
