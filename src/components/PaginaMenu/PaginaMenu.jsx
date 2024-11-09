import { Link } from 'react-router-dom'
import IconoFlechaRegresar from "../icons/IconoFlechaRegresar";
import BtnMenu from "../btn/BtnMenu";
import {ImgTacos, ImgTacosSuadero} from "../img/ImgTacos";
import Logo from "../mod/Logo";
import Redes2 from "../mod/Redes2";
const PaginaMenu = () => {
    return (
        <div className="PaginaMenu min-h-[100vh] flex flex-col font-inter bg-white p-5 relative overflow-hidden justify-evenly">
            <ImgTacos className="absolute w-52 h-52 sm:w-64 sm:h-64 sm:top-[-100px] sm:right-[-90px] top-[-70px] right-[-80px] shadow-xl rounded-full animate-fadeintopright" />
            <div className="header flex gap-2 items-center  text-Verde">
                <IconoFlechaRegresar />
                <Link to="/">
                    <p className="font-semibold">Regresar</p>
                </Link>
            </div>
            <div className="contenido flex flex-col gap-6 sm:gap-8 ">
                <div className="Logo flex items-center gap-1">
                    <Logo />
                </div>
                <div className="textos animate-fadeinleft">
                    <p className="font-extrabold text-base">Platillos</p>
                    <p className="font-medium text-xs">Selecciona un platillo para ver la variedad disponible.</p>
                </div>
                <div className="botones flex flex-col gap-10 items-center justify-center uppercase animate-zoomIn">
                        <Link to="/Menu-Platillo-Tacos">
                            <BtnMenu img={<ImgTacos />} Texto="Tacos"></BtnMenu>
                        </Link>
                        <Link to="/Menu-Platillo-Tacos">
                            <BtnMenu img={<ImgTacos />} Texto="Tortas"></BtnMenu>
                        </Link>
                        <Link to="/Menu-Platillo-Tacos">
                            <BtnMenu img={<ImgTacos />} Texto="Gringas"></BtnMenu>
                        </Link>
                        <Link to="/Menu-Platillo-Tacos">
                            <BtnMenu img={<ImgTacos />} Texto="Bebidas"></BtnMenu>
                        </Link>
                </div>
            </div>
            {/* <div className="footer flex justify-between sm:justify-evenly text-xs font-semibold animate-slideinup mt-2">
                <Redes />
            </div> */}
            <div className="footer">
            <Redes2></Redes2>
            </div>
        </div>
    );
};
export default PaginaMenu;