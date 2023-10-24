import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Cadastro } from './pages/Cadastro';
import { EsqueciSenha } from './pages/EsqueciSenha';
import { Chat } from './pages/Chat';
import { ChatPrivado } from './pages/ChatPrivado';
import { Perfil } from './pages/Perfil';
import { EditarPerfil } from './pages/EditarPerfil';
import { Home } from './pages/Home';
import { FazerPost } from './pages/FazerPost';
import { Noticia } from './pages/Noticia';
import { NoticiaWebView } from './pages/NoticiaWebView';
import { RedefinirSenha } from './pages/RedefinirSenha';
// import About from './components/About';
// import Contact from './components/Contact';

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Cadastro />} />
          <Route path="/esqueciSenha" element={<EsqueciSenha/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/editarperfil" element={<EditarPerfil/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/chatprivado" element={<ChatPrivado/>} />
          <Route path="/fazerpost" element={<FazerPost/>} />
          <Route path="/noticia" element={<Noticia/>} />
          <Route path="/noticiaWebView" element={<NoticiaWebView/>} />
          <Route path="/redefinirsenha" element={<RedefinirSenha/>} />
          
      </Routes>
    </BrowserRouter>
  );
}


