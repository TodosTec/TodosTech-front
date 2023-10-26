import './style.less'
import {Perfil} from '../../assets/62b8395d-4b5c-4efa-ba2f-088d359eb284.png'

export function Contato({nome = 'Tom Hiddlwaton', foto, ultimaMensagem = 'Dia 5 lança nova temp!!!', tempoUltimaMensagem = 'Há 2 minutos', aoClicar}){
    return (
        <div className='Contato' onClick={aoClicar}>
            <div className="left">
                <div className="foto"></div>
                    <span className='coluna1'>
                        <h1>{nome}</h1>
                        <p>{ultimaMensagem}</p>
                    </span>
            </div>
            <div className="info">
                <span className='coluna2'>
                    {tempoUltimaMensagem}
                </span>
            </div>
        </div>
    )
}