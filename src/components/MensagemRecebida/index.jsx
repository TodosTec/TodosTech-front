import './style.less'

export function MensagemRecebida({classe = '', username ='guizz', mensagem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'}){
    return(
        <div className={classe + " MensagemRecebida"}>
            <h1>{username}</h1>
            <p>{mensagem}</p>
        </div>
    )
}