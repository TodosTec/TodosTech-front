import './style.less'
import {ChevronForward, PersonCircleOutline} from 'react-ionicons'
export function ItemBottomMenu({titulo = 'Editar perfil',
    info = 'Realizar mudanças em sua conta',
    icon = <PersonCircleOutline width='22px' 
    height='22px' 
    color='#FD3D6C' 
    cssClasses='icon'/>, 
    classe = '',
    aoClicar
}){
    return(
        <button className={classe + " ItemBottomMenu"} onClick={aoClicar}>
            {icon}
            <div className="text-arrow">
                <div className="coluna-textos">
                    <h1>{titulo}</h1>
                    <p>{info}</p>
                </div>
                <ChevronForward 
                    width='15px' 
                    height='15px' 
                    color='gray'
                />
            </div>
        </button>
    )
}