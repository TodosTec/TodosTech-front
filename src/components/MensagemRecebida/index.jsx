import './style.less'

export function MensagemRecebida({classe = '', mensagem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'}){
    return(
        <div className={classe + " MensagemRecebida"}>
            <p>{mensagem}</p>
        </div>
    )
}