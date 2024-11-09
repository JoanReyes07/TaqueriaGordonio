const BtnInicio = ({ texto, className, classNameTexto, icon }) => {
    return (
        <div className={`${className} animate-[pulse_1s_ease-in-out_infinite]`}>
            <div className={`${classNameTexto}`}>
                {texto}
            </div>
            {icon}
        </div>
    );
};

export default BtnInicio;