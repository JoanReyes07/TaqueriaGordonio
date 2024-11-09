import TacosImagen from "./Tacos4.png";
import TacosSuadero from "./TacosSuadero.png";
import TacosBistec from "./TacosBistec.png";
import TacosLonganiza from "./TacosLonganiza.png";
import Logo from "./Logo.png";

export const ImgTacos = ({ className }) => {
    return (
        <img className={`${className} `} src={TacosImagen} />
    );
};
export const ImgTacosSuadero = ({ className }) => {
    return (
        <img className={`${className} w-56 h-56 shadow-lg rounded-full`} src={TacosSuadero} />
    );
};
export const ImgTacosBistec = ({ className }) => {
    return (
        <img className={`${className} w-56 h-56 shadow-lg rounded-full`} src={TacosBistec} />
    );
};
export const ImgTacosLonganiza = ({ className }) => {
    return (
        <img className={`${className} w-56 h-56 shadow-lg rounded-full`} src={TacosLonganiza} />
    );
};

export const ImgLogoTacos = ({ className }) => {
    return (
        <img className={`${className} w-56 h-56 shadow-lg rounded-full`} src={Logo} />
    );
};