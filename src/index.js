import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import './services/MarvelService';
import React from "react";





// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.title)))
// marvelService.getAllCharacters().then(res => console.log(res))


// marvelService.getCharacter(8).then(res => console.log(res))

const container = document.getElementById("root");
const root = createRoot(container);
root.render(

<React.StrictMode>           

<App />

</React.StrictMode>

);
