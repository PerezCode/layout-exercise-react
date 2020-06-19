import React from "react";
import consultoriaImg from "../images/apreton-de-manos.jpg";
import formacionImg from "../images/planta-en-manos.jpg";
import analisisImg from "../images/analisis.jpg";
import investigacionImg from "../images/investigacion.jpg";
import "./styles/Main.css";

const Main = () => {
  return (
    <main className="Main">
      <h2 className="Main__Title">Soluciones corporativas</h2>
      <h3 className="Main__Subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
      <hr className="DividingLine"/>
      <section className="Services">
        <article className="Service">
          <figure className="ImgContainer">
            <img className="ImgContainer__Image" src={consultoriaImg} alt="consultoria"/>
          </figure>
          <h4 className="Service__Title BlueColor">Consultoría</h4>
          <hr className="DividingLine DividingLine--Service"/>
          <p className="Service__Description">Duis autem veim inure dolor in hendrerit vulputate...</p>
        </article>
        <article className="Service">
          <figure className="ImgContainer">
            <img className="ImgContainer__Image" src={formacionImg} alt="formacion"/>
          </figure>
          <h4 className="Service__Title LightblueColor">Formación</h4>
          <hr className="DividingLine DividingLine--Service"/>
          <p className="Service__Description">Veliesse molestie consequat vel illum dolore...</p>
        </article>
        <article className="Service">
          <figure className="ImgContainer">
            <img className="ImgContainer__Image" src={analisisImg} alt="analisis"/>
          </figure>
          <h4 className="Service__Title OrangeColor">Análisis</h4>
          <hr className="DividingLine DividingLine--Service"/>
          <p className="Service__Description">Feugiat nulla facilisis at vero eros et acoumsan...</p>
        </article>
        <article className="Service">
          <figure className="ImgContainer">
            <img className="ImgContainer__Image" src={investigacionImg} alt="investigacion"/>
          </figure>
          <h4 className="Service__Title RedColor">Investigación</h4>
          <hr className="DividingLine DividingLine--Service"/>
          <p className="Service__Description">Dignissim qui blandit praent luptatum...</p>
        </article>
      </section>
    </main>
  )
}

export default Main;