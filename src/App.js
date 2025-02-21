import "animate.css/animate.min.css";
import "../node_modules/animate.css/animate.min.css";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SignupView from "./signupView"

import "./App.css";
const verses = [
  { text: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma.", reference: "3 Juan 1:2", animation: "animate__fadeInUp", color: "#d32f2f" },
  { text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe.", reference: "1 Juan 5:4", animation: "animate__fadeInLeft", color: "#1976d2" },
  { text: "He aquí, llamarás a gente que no conociste, y gentes que no te conocieron correrán a ti, por causa de Jehová tu Dios.", reference: "Isaías 55:5", animation: "animate__zoomIn", color: "#388e3c" },
  { text: "No mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas.", reference: "2 Corintios 4:18", animation: "animate__bounceIn", color: "#ffa000" },
  { text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo.", reference: "Efesios 1:3", animation: "animate__flipInX", color: "#7b1fa2" },
];

function App() {
  return (
    <div className="App">
      {/* Versículos individuales */}
      {verses.map((verse, index) => (
        <AnimationOnScroll key={index} animateIn={verse.animation}>
          <div className="verse-card" style={{ color: verse.color }}>
            <p className="verse-text">{verse.text}</p>
            <p className="verse-reference">{verse.reference}</p>
          </div>
        </AnimationOnScroll>
      ))}

      {/* Pasaje Completo de Lucas 5:1-11 */}
      <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
        <div className="passage-card">
          <h2>Lucas 5:1-11</h2>
          <p> Aconteció que estando Jesús junto al lago de Genesaret, el gentío se agolpaba sobre él para oír la palabra de Dios. 2 Y vio dos barcas que estaban cerca de la orilla del lago; y los pescadores, habiendo descendido de ellas, lavaban sus redes. 3 Y entrando en una de aquellas barcas, la cual era de Simón, le rogó que la apartase de tierra un poco; y sentándose, enseñaba desde la barca a la multitud. 4 Cuando terminó de hablar, dijo a Simón: Boga mar adentro, y echad vuestras redes para pescar. 5 Respondiendo Simón, le dijo: Maestro, toda la noche hemos estado trabajando, y nada hemos pescado; mas en tu palabra echaré la red. 6 Y habiéndolo hecho, encerraron gran cantidad de peces, y su red se rompía. 7 Entonces hicieron señas a los compañeros que estaban en la otra barca, para que viniesen a ayudarles; y vinieron, y llenaron ambas barcas, de tal manera que se hundían. 8 Viendo esto Simón Pedro, cayó de rodillas ante Jesús, diciendo: Apártate de mí, Señor, porque soy hombre pecador. 9 Porque por la pesca que habían hecho, el temor se había apoderado de él, y de todos los que estaban con él, 10 y asimismo de Jacobo y Juan, hijos de Zebedeo, que eran compañeros de Simón. Pero Jesús dijo a Simón: No temas; desde ahora serás pescador de hombres. 11 Y cuando trajeron a tierra las barcas, dejándolo todo, le siguieron. </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default App