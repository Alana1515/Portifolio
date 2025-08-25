import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Titulo from "./Header";
import "./App.css";

function App() {
  return (
    <div>

<Titulo/>
  
   <Footer/>
   

      <Card
    titulo={"Olá! Sou João da Silva, desenvolvedor web focado em front-end. Tenho experiência com React, HTML, CSS e JavaScript. Gosto de criar interfaces limpas, responsivas e acessíveis."}
    descricao={"Sou apaixonado por transformar ideias em experiências digitais intuitivas. Ao longo da minha jornada como desenvolvedor front-end, venho construindo interfaces modernas que unem performance, design e usabilidade. Com domínio em React, HTML, CSS e JavaScript, busco constantemente aprender novas tecnologias e seguir as melhores práticas do desenvolvimento web. Acredito que um bom código anda lado a lado com uma boa experiência do usuário — limpa, responsiva e acessível para todos."}
    />
</div>
  )
}
export default App