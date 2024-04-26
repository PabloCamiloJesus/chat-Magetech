// Imports de imagens para a tela de Splash

// Logo da Empresa
import SplashLogo from "../../assets/logo-sem-fundo.png";

// Cada letra da palavra TECHMAGE
import Split1 from "../../assets/Splash-Splits/Split1_T.png";
import Split2 from "../../assets/Splash-Splits/Split2_E.png";
import Split3 from "../../assets/Splash-Splits/Split3_C.png";
import Split4 from "../../assets/Splash-Splits/Split4_H.png";
import Split5 from "../../assets/Splash-Splits/Split5_M.png";
import Split6 from "../../assets/Splash-Splits/Split6_A.png";
import Split7 from "../../assets/Splash-Splits/Split7_G.png";
import Split8 from "../../assets/Splash-Splits/Split8_E.png";

// Barra para simular a digitação
import Split9_Digit from "../../assets/Splash-Splits/Split9_Digit.png";

// CSS
import "./Splash.css";

// Exportando Função
export default function Splash() {

    // Pega o item img-splash
    const imgSplash = document.querySelector(".img-splash");

    // Verifica se a imagem foi encontrada
    if (imgSplash) {
        imgSplash.style.opacity = "1";

    };

    // Pega cada imagem do texto TECHMAGE
    const textSplashes = document.querySelectorAll(".text-splash");

    // Função para animar um elemento individual
    function animateElement(itens, delay) {
        setTimeout(function () {
            itens.style.opacity = "1";
        }, delay);
    }

    // Iterar sobre cada elemento e animá-los sequencialmente
    textSplashes.forEach((textSplash, index) => {
        const delay = index * 150; // Ajuste esse valor conforme necessário
        animateElement(textSplash, delay);
    });

    // Retornando os elementos
    return (
        <div>

            {/* Container Geral do Splash */}
            <div className="splash-container">

                {/* A logo TechMage */}
                <div className="splash-img">
                    <img src={SplashLogo} alt="" className="img-splash" />
                </div>

                {/* Div com Todas as Letras e Caracteres formando o nosso Nome */}
                <div className="splash-text">
                    <img src={Split1} alt="" className="text-splash" id="text-splash1" />
                    <img src={Split2} alt="" className="text-splash" id="text-splash2" />
                    <img src={Split3} alt="" className="text-splash" id="text-splash3" />
                    <img src={Split4} alt="" className="text-splash" id="text-splash4" />
                    <img src={Split5} alt="" className="text-splash" id="text-splash5" />
                    <img src={Split6} alt="" className="text-splash" id="text-splash6" />
                    <img src={Split7} alt="" className="text-splash" id="text-splash7" />
                    <img src={Split8} alt="" className="text-splash" id="text-splash8" />
                    <img src={Split9_Digit} alt="" className="text-splash barra" id="text-splash9" />

                </div>

            </div>

        </div>
    )
};