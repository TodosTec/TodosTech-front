import { ItemBottomMenu } from '../itemBottomMenu'
import './style.less'
import {ExitOutline, LockOpenOutline} from 'react-ionicons'
export function BottomMenu({
    aoClicarRetangulo, 
    aoClicarOpt1, 
    aoClicarOpt2, 
    aoClicarSair,
    option1 = <ItemBottomMenu 
        aoClicar={aoClicarOpt1}/>, 
    option2 = <ItemBottomMenu 
        icon={<LockOpenOutline cssClasses='icon'/>} 
        aoClicar={aoClicarOpt2}
        titulo='Alterar Senha'
        info='Controlar acesso a sua conta'
        />,
        classe = ''
}){
    return(
        <div className={classe + " BottomMenu"}>
            {/* <BarChart/> */}
            <div className="retangulo" onClick={aoClicarRetangulo}></div>
            <div className="itens">
                {option1}
                {option2}   
                <ItemBottomMenu 
                    icon={<ExitOutline cssClasses='icon'/>}
                    titulo='Sair' 
                    classe = 'sair' 
                    info='Deslogar da conta'
                    aoClicar={aoClicarSair}
                />
            </div>
        </div>
    )
}