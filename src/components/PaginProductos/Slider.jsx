import { CardTacos, CardTortas } from "./CardProducto";
import { ImgTacosSuadero, ImgTacosBistec, ImgTacosLonganiza, ImgTacos } from "../img/ImgTacos";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const SliderTacos = () => {
  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        <div>
          <CardTacos img={<ImgTacosSuadero />} Taco="TACO DE SUADERO" Carne="CARNE DE RES" Descrip="Deliciosa tortilla de maíz rellena de suadero, un corte jugoso y tierno de carne de res, cocido lentamente para resaltar su sabor." Precio="$17.00" />
        </div>
        <div>
          <CardTacos img={<ImgTacosBistec />} Taco="TACO DE BISTEC" Carne="Carne de Res" Descrip="Deliciosa tortilla de maíz rellena de bistec, un corte de carne de res tierno y jugoso, asado a la perfección para ofrecer un sabor robusto y lleno de sabor." Precio="$17.00" />
        </div>
        <div>
          <CardTacos img={<ImgTacos />} Taco="TACO DE CHULETA" Carne="Carne de Cerdo" Descrip="Exquisita tortilla de maíz rellena de chuleta, un corte de carne de cerdo jugoso y sabroso, cocinado a la parrilla para resaltar su sabor ahumado y delicioso." Precio="$17.00" />
        </div>
        <div>
          <CardTacos img={<ImgTacosLonganiza />} Taco="TACO DE LONGANIZA" Carne="Carne de Cerdo" Descrip="Deliciosa tortilla de maíz rellena de longaniza, una salchicha de cerdo especiada, que al cocinarse desprende un sabor picante y sabroso, ideal para los amantes de lo condimentado." Precio="$17.00" />
        </div>
        <div>
          <CardTacos img={<ImgTacos />} Taco="TACO CAMPECHANO" Carne="(Longaniza y Suadero)" Descrip="Exquisita tortilla de maíz rellena de longaniza y suadero, combinando la jugosidad y sabor especiado de la longaniza con la ternura del suadero, cocido lentamente para resaltar su sabor." Precio="$17.00" />
        </div>
      </Slider>
    </div>
  );
}

export function SliderTortas() {
  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        <div>
          <CardTortas Tortas="TORTA DE SUADERO" Queso="+ queso" Descrip="Deliciosa telera rellena de suadero, un corte jugoso y tierno de carne de res, cocido lentamente para resaltar su sabor, acompañado de queso derretido que le da un toque cremoso y delicioso." Precio="$60.00" />
        </div>
        <div>
          <CardTortas Tortas="TORTA DE BISTEC" Queso="+ queso" Descrip="Deliciosa telera rellena de bistec, un corte de carne de res tierno y jugoso, acompañado de queso derretido que se funde perfectamente con el sabor del bistec asado, creando una combinación irresistible." Precio="$60.00" />
        </div>
        <div>
          <CardTortas Tortas="TORTA DE CHULETA" Queso="+ queso" Descrip="Exquisita telera rellena de chuleta, un corte de carne de cerdo jugoso y sabroso, acompañado de queso fundido que resalta aún más su sabor ahumado y delicioso." Precio="$60.00" />
        </div>
        <div>
          <CardTortas Tortas="TORTA DE LONGANIZA" Queso="+ queso" Descrip="Sabor explosivo en cada bocado, esta torta está rellena de longaniza, una salchicha de cerdo especiada, combinada con queso derretido que resalta la mezcla de especias, brindando un toque de sabor único y delicioso." Precio="$60.00" />
        </div>
        <div>
          <CardTortas Tortas="TORTA CAMPECHANA" Queso="+ queso" Descrip="Una combinación perfecta de longaniza y suadero, acompañada de queso derretido que potencia el sabor de las carnes. El queso fundido envuelve perfectamente la jugosidad de la longaniza y la suavidad del suadero, creando una torta deliciosa y llena de sabor." Precio="$60.00" />
        </div>
      </Slider>
    </div>
  );
}