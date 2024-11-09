import { Link } from 'react-router-dom'
import { SliderTacos } from "./Slider";
import { ImgTacos } from "../img/ImgTacos";
import IconoFlechaRegresar from "../icons/IconoFlechaRegresar";
import Logo from "../mod/Logo";
import Redes from "../mod/Redes";
import Redes2 from "../mod/Redes2"
const PaginaProductos = () => {
    return (
        <div className="PaginaProducto min-h-[100vh] flex flex-col font-inter bg-white p-5 relative overflow-hidden justify-evenly">
            <ImgTacos className="absolute w-52 h-52 sm:w-64 sm:h-64 sm:top-[-100px] sm:right-[-90px] top-[-70px] right-[-80px] shadow-xl rounded-full animate-fadeintopright" />
            <div className="header flex gap-2 items-center  text-Verde">
                <IconoFlechaRegresar />
                <Link to="/Menu-General">
                    <p className="font-semibold">Regresar</p>
                </Link>
            </div>
            <div className="contenido flex flex-col gap-6 sm:gap-8 ">
                <div className="Logo flex items-center gap-1">
                    <Logo />
                </div>
            </div>
            <div className="textos animate-fadeinleft">
                <p className="font-extrabold text-base">Platillos - Sección Tacos</p>
                <p className="font-medium text-xs">Todos nuestros platillos van acompañados de col y cilantro.</p>
            </div>
            <div className="carusel animate-zoomIn">
                <SliderTacos />
            </div>
            <div className="footer flex bg-gray-300  animate-slideinup">
                {/* <Redes2 /> */}
            </div>
        </div>
    );
};

export default PaginaProductos;


