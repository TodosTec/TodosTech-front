import './style.less'
export function Post(){
    return(
        <div className="Post">
            <div className="conteudo">
                <div className="fotoPerfil"></div>
                <div className="textosPost">
                    <p className='nome'><b>Tom</b> @tomzinho</p>
                    <p className='texto'>UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou</p>
                </div>
            </div>
        </div>
    )
}