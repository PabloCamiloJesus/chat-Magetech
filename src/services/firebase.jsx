import firebase from "firebase/compat/app"; // Importa o pacote firebase compatível com a versão 9
import "firebase/compat/auth"; // Importa o módulo de autenticação do Firebase
import "firebase/compat/firestore"; // Importa o módulo de Firestore do Firebase

const firebaseConfig = {
    // Chave de API do Firebase, utilizada para autenticação e autorização
    apiKey: "AIzaSyA3sirrVLL9a9IFDxTcEWml-reIYQkaEuU",
    // Domínio autorizado para autenticação
    authDomain: "pablo-whatsapp.firebaseapp.com",
    // ID do projeto no Firebase, utilizado para identificar o projeto no console do Firebase
    projectId: "pablo-whatsapp",
    // Bucket de armazenamento no Firebase, utilizado para armazenar arquivos e mídia
    storageBucket: "pablo-whatsapp.appspot.com",
    // ID do remetente de mensagens no Firebase, utilizado para envio de notificações push
    messagingSenderId: "392409496066",
    // ID do aplicativo no Firebase, utilizado para identificar o aplicativo no console do Firebase
    appId: "1:392409496066:web:88d6ebdb889097cd45451b"
};

const app = firebase.initializeApp(firebaseConfig); // Inicializa o aplicativo Firebase com a configuração fornecida
const db = app.firestore(); // Obtém uma instância do Firestore para interagir com o banco de dados
const auth = app.auth(); // Obtém uma instância de autenticação para autenticar usuários
const provider = new firebase.auth.GoogleAuthProvider(); // Cria uma instância do provedor de autenticação do Google

export { db, auth, provider }; // Exporta as instâncias do Firestore, autenticação e provedor para uso em outros arquivos
