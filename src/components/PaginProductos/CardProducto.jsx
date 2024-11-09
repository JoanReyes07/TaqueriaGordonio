import {ImgTacos, ImgTacosSuadero} from "../img/ImgTacos";
export const CardTacos = ({ img, Taco, Carne, Descrip, Precio }) => {
    return (
        <div className="card bg-Verde w-64 h-auto flex flex-col rounded-lg shadow-xl text-white p-2 m-auto">
            <div className="imagen flex justify-center">
                {img}
            </div>
            <div className="textos p-4">
                <h1 className="text-base font-extrabold uppercase">{Taco}</h1>
                <h3 className="text-sm mb-2 uppercase">{Carne}</h3>
                <p className="text-xs font-semibold text-justify">{Descrip}</p>
            </div>
            <div className="precio text-xl font-extrabold flex justify-end p-2">
                <p>{Precio}</p>
            </div>
        </div>
    );
}

export const CardTortas = ({ Tortas, Queso, Descrip, Precio }) => {
    return (
        <div className="card bg-Verde w-64 h-auto flex flex-col rounded-lg shadow-xl text-white p-2 m-auto">
            <div className="imagen flex justify-center">
                <ImgTacosSuadero className="w-56 h-56 shadow-lg rounded-full" />
            </div>
            <div className="textos p-4">
                <h1 className="text-base font-extrabold uppercase">{Tortas}</h1>
                <h3 className="text-sm mb-2 uppercase">{Queso}</h3>
                <p className="text-xs font-semibold text-justify">{Descrip}</p>
            </div>
            <div className="precio text-xl font-extrabold flex justify-end p-2">
                <p>{Precio}</p>
            </div>
        </div>
    );
}
