import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="SectionFooter">
        <article className="Article">
          <h3 className="Article__Title">¡Bienvenido!</h3>
          <hr className="LineFooter"/>
          <p className="Article__Details">
            lorem ipsum dolor sit amet consectetur adipiscing elit. aenean commodo ligula eget dolor. <span className="RedColor">Aenean massa</span>. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="Article__Details">
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venanitis vitae justo. <span className="RedColor">Nullam dictum</span> felis eu pede millos pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifen teilus.
          </p>
          <button className="Button">Leer más</button>
        </article>
        <article className="Article">
          <h3 className="Article__Title">Noticias Recientes</h3>
          <hr className="LineFooter"/>
          <span className="PublishDate">Publicada: 09.09.2012</span>
          <p className="Article__Details">
            Nam liber tempor cum soluta nobis eleifend option congue nihimperdiet doming quod mazin placerat facer possim assum orem ipsum dolor sit amet consectetuer.
          </p>
          <span className="PublishDate">Publicada: 08.09.2012</span>
          <p className="Article__Details">
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <button className="Button">Más noticias</button>
        </article>
        <article className="Article">
          <h3 className="Article__Title">Nuestros Servicios</h3>
          <hr className="LineFooter"/>
          <ul className="ServicesList">
            <li className="ServicesList__Item RedColor">Consultoría General</li>
            <li className="ServicesList__Item RedColor">Análisis Regulatorio de Polticas</li>
            <li className="ServicesList__Item RedColor">Investigación de Mercado</li>
            <li className="ServicesList__Item RedColor">Gestión de Proyectos</li>
            <li className="ServicesList__Item RedColor">Regulación de Soporte</li>
            <li className="ServicesList__Item RedColor">Anáisis de Riesgos</li>
            <li className="ServicesList__Item RedColor">Formación Gerencial</li>
          </ul>
          <button className="Button">Leer más</button>
        </article>
      </section>
      <hr className="LineFooter"/>
    </footer>
  )
}

export default Footer;
