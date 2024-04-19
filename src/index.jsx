import {createRoot} from "react-dom/client"; // Importa a função createRoot do pacote react-dom/client, que permite renderizar a raiz da aplicação
import App from "./App"; // Importa o componente principal da aplicação
import GlobalStyle from "./styles/global";// Importa estilos globais para a aplicação


// Cria um ponto de entrada na DOM com o elemento que possui o id "root"
const root = createRoot(document.querySelector("#root"));

// Renderiza os componentes principais da aplicação, encapsulados por um fragmento React
root.render(
<>
    <App />
    <GlobalStyle />
</>
);