import { Post } from '../Post'
import './style.less'

export function PostEmpresa({nome, texto, username, link}){
    return(
        <div className="PostEmpresa">
            <Post
                nome={nome}
                text={texto}
                username={username}
                fotoPerfil='https://icons-for-free.com/iconfiles/png/512/city+citycons+corporate+icon-1320136424674449796.png'
            />
            <a href={`https://${link}`} target='blank'>Mais informações aqui</a>
        </div>
    )
}