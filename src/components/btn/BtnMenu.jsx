import React from 'react';
const BtnMenu = ({ img, Texto }) => {
  return (
    <button
      type="submit"
      className="flex relative justify-evenly text-white items-center font-bold shadow-xl text-lg bg-Verde lg:font-semibold isolation-auto border-Verde before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-lg before:bg-white hover:text-Verde before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 w-64 h-16 sm:w-72 sm:h-20 md:w-80 md:h-24 px-2 py-1 overflow-hidden border-2 rounded-lg group"
    >
      <div className="icono rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
        {img}
      </div>
      <div className="texto text-2xl font-extrabold sm:">
        <p>{Texto}</p>
      </div>
      <div className="icono">
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 justify-end bg-white group-hover:rotate-90 group-hover:bg-Verde hover:text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-Verde group-hover:fill-white"
          />
        </svg>
      </div>
    </button>
  );
};

export default BtnMenu;




{/* <div className="btn sm:w-72 sm:h-20 bg-Verde text-white flex relative w-64 h-16 rounded-lg items-center justify-center">
                        <div className="icono absolute rounded-full w-24 h-24 top-[-20px] left-3 flex items-center justify-center shadow-lg">
                            <ImgTacos />
                        </div>
                        <div className="texto ml-24 text-2xl font-extrabold">
                            <p>Tacos</p>
                        </div>
                    </div> */}