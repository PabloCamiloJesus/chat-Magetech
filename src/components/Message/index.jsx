import React from "react";
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {

    // Coletando todas as informações do usuário autnticado
    const [userLoggedIn] = useAuthState(auth);

    return(
        <C.Container>
            {/* Cria uma classe para as linhas, verificando se o usuário atual do aplicativo é o mesmo do chat, possibilitando uma estilização diferente par a mensagem */}
            <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
                <C.Content>
                    {/* Exibindo a mensagens e as informações delas */}
                    <C.Message>
                        {message.message}
                    </C.Message>
                    <C.MessageDate>
                        {new Date(message?.timestamp).toLocaleString()}
                    </C.MessageDate>
                </C.Content>
            </C.Line>
        </C.Container>
    );
};

export default Message;