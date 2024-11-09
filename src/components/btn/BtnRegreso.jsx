const BtnRegreso = ({ className, Texto, classNameTexto, Icono, classNameIcono }) => {
    return (
        <div className={`${className}`}>
            <div className={`${classNameIcono}`}>
                {Icono}
            </div>
            <div className={`${classNameTexto}`}>
                {Texto}
            </div>
        </div>
    );
};
export default BtnRegreso;