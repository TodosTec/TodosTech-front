import './style.less'

export function MensagemEnviada({classe = '', username ='guizz', mensagem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'}){
    return(
        <div className={classe + " MensagemEnviada"}>
            <h1>{username}</h1>
            <p>{mensagem}</p>
        </div>
    )
}