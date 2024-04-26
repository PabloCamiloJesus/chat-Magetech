import React, { useEffect, useState } from "react"; // Importa o React e os hooks useEffect e useState

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import Chat from "./components/Chat";
import Splash from "./components/Splash/Splash";

// Contante que Aplica todos os elementos e funcionalidades na tela
const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  // Hook React de Efeito, está puxando as informações do Banco de Dados
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  // TEMPORIZADOR PARA TELA DE SPLASH
  useEffect(() => {
    // Define um temporizador para esconder a tela de splash após 5 segundos
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5000 milissegundos = 5 segundos

    // Limpa o temporizador ao desmontar o componente para evitar vazamentos de memória
    return () => clearTimeout(splashTimer);
  }, []);

  // Condição para a tela de splash ser ativada
    if (showSplash) return <Splash />

    // Logo após, a tela de loading caso necessário
    if (loading) return <Loading />;

    // Tela de Login se o usuário não estiver cadastrado
    if (!user) return <Login />;

    // Se estiver, retorna os elementos Sidebar e Chat
    return (

      // ___________________

      <C.Container>
        <Sidebar setUserChat={setUserChat} userChat={userChat} />
        <Chat userChat={userChat}   setUserChat={setUserChat} />
      </C.Container>
    );
  }

  export default App; // Exporta o componente App como padrão
