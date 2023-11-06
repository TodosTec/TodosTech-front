import './style.less';
import foto from '../../assets/tomhiddleston.png' 
export function Post({ nome = 'Tom', username = 'tomzinho', text = 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou', repetido = false, fotoPerfil = {foto} }) {
    return (
        <div className="Post">
            <div className="conteudo">
                <div className="fotoPerfil" style={{backgroundImage: `url(${fotoPerfil})`}}></div>
                <div className="textosPost">
                    <div className="info">
                        <p className='nome'><b>{nome}</b> @{username}</p>
                        <p className='repetido'>{repetido ? 'Post repetido' : ''}</p>
                    </div>
                    <p className='texto'>{text}</p>
                </div>
            </div>
        </div>
    );
}
