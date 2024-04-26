import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import Mago from "../../assets/MagoPronto.jpeg";

const Login = () => {;

  // Chama a janela de autentcação do Google
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  
  return (
    // Estilização da página
    <C.Container>
      <C.LoginBox>
        <C.Image src={Mago} />
        <C.ButtonBox>
          <C.Title>TechMage Chat</C.Title>
          <C.Text>Conversas que conectam, laços que perduram.</C.Text>
          <C.Button onClick={handleSignin}>Login com Google</C.Button>
        </C.ButtonBox>
      </C.LoginBox>
    </C.Container>
         
        
  );
};

export default Login;
