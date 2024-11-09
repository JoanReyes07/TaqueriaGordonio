import { Link } from 'react-router-dom'
import BtnInicio from "../btn/BtnInicio";
import { ImgTacos, ImgLogoTacos } from "../img/ImgTacos";
import IconBotonInicio from "../icons/IconBotonInicio";
const PaginaIncio = () => {
    return (
        <div className=' min-h-[100vh] font-inter bg-Verde flex flex-col justify-evenly p-5 text-white '>
            <div className="header flex justify-between items-center ">
                <div className="texto font-extrabold text-sm animate-fadeintopleft">
                    <p className="mb-[-5px]">De</p>
                    <p >Nexus-Code</p>
                </div>
                <div className="icono animate-fadeintopright">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
            <div className="Contenido flex flex-col gap-1">
                <div className="Titulos animate-fadeinleft ">
                    <h3 className="text-2xl font-extrabold uppercase animate-fadeinleft">Taquería </h3>
                    <h1 className="text-5xl uppercase ml-[-6px] font-extrabold animate-fadeinleft">Gordonio</h1>
                    <h4 className="text-sm font-extrabold animate-fadeinleft">Menú Digital</h4>
                </div>
                <div className="imagen flex flex-col justify-center items-center animate-zoomIn">
                    <ImgLogoTacos className="w-full h-full md:w-[80%] md:h-[80%} lg:w-[70%] lg:h-[70%} xl:w-[50%] xl:h-[50%} 2xl:w-[20%] 2xl:h-[20%}" />
                </div>
                <div className="texto w-60 text-center text-xs animate-zoomIn m-auto">
                    <p>¡Descubre lo mejor de nuestro menú y promociones!</p>
                </div>
            </div>
            <div className="boton flex justify-center ">
                <Link to="/Menu-General">
                    <BtnInicio texto="Comenzar" className="flex items-center justify-between bg-white text-Verde p-1 rounded-full w-40" classNameTexto=" font-bold text-base ml-3 uppercase " icon={<IconBotonInicio className="w-10 h-10" />} />
                </Link>
            </div>
        </div>
    );
};
export default PaginaIncio;



