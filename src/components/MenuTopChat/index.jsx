import { useNavigate } from 'react-router-dom'
import './style.less'
import {ArrowBack} from 'react-ionicons'
export function MenuTopChat({nome = 'Tom Hiddleston', online = false, aoClicar, foto}){
    const navigate = useNavigate()

    return(  
        <div className="MenuTopChat">
            <ArrowBack onClick={aoClicar} cssClasses={'cursor'}/>
            <div className="conteudo">
                <div className="fotoPerfil" style={{ backgroundImage: `url(${foto})` }}></div>
                <div className="textos">
                    <h1>{nome}</h1>
                </div>
            </div>
        </div>
    )
}