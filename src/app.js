/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generadorDominios(pronoun, adj, noun) {
    let combinaciones = [];
    for (let pronombre of pronoun) {
      for (let adjetivo of adj) {
        for (let sustantivo of noun) {
          let dominio = `${pronombre}${adjetivo}${sustantivo}.com`;
          combinaciones.push(dominio);
        }
      }
    }
    return combinaciones;
  }
  //llamo a la funcion
  const dominios = generadorDominios(pronoun, adj, noun);

  console.log(dominios);
};
