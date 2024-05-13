import { buttonStyle, bodyStyles, h1 } from "./styles.js";



const constainer = document.createElement("div");
Object.assign(constainer.style, bodyStyles);
document.body.appendChild(constainer);

const texte = document.createElement("h1");
texte.textContent = "Olá mundo";
Object.assign(texte.style, h1);
constainer.appendChild(texte);

const button = document.createElement("button");
button.textContent= "Muda a cor";
Object.assign(button.style, buttonStyle);

constainer.appendChild(button);
