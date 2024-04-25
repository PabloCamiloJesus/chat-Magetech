import React, { useState } from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import Mago from "../../assets/MagoPronto.jpeg";
import Moon from "../../assets/icon_moon_crescente.png";
import Sun from "../../assets/icon_sun.png";

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aqui você pode adicionar lógica adicional para mudar o tema da sua aplicação
  };

  return (
    <C.Container>
      <C.LoginBox isDarkMode={isDarkMode}>
        <C.Image src={Mago} />
        <C.ButtonBox isDarkMode={isDarkMode}>
          <C.Title isDarkMode={isDarkMode}>TechMage</C.Title>
          <C.Text isDarkMode={isDarkMode}>Conversas que conectam, laços que perduram.</C.Text>
          <C.Button onClick={handleSignin} isDarkMode={isDarkMode}>Login com Google</C.Button>
           <C.ThemeButton onClick={toggleDarkMode} isDarkMode={isDarkMode}>
            {isDarkMode ? <i class="bi bi-brightness-high"></i> : <i class="bi bi-moon"></i>}
          </C.ThemeButton>
        </C.ButtonBox>
      </C.LoginBox>
    </C.Container>
         
        
  );
};

export default Login;
