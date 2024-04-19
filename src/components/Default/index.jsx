import React from "react";
import * as C from "./styles";
import { LogoTitle } from "./styles";
// import { MdMessage } from "react-icons/md";

const Default = () => {
    return (
        <C.Container>
            <LogoTitle />
            <C.Title>
                MageTech Chat-App
            </C.Title>
            <C.Info>
                Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet.
            </C.Info>
        </C.Container>
    );
};

export default Default;