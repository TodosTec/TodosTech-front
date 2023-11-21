import './style.less'
import {ArrowForwardOutline} from 'react-ionicons'
export function MenuEnviarMensagem({placeholder = 'Escreva sua mensagem aqui', valor, setValor, aoClicarArrow}){
    return(
        <div className="MenuEnviarMensagem">
            <input type="text" placeholder={placeholder} value={valor} onChange={(event) => {setValor(event.target.value)}}/>
            <ArrowForwardOutline onClick = {aoClicarArrow}/>
        </div>
    )
}