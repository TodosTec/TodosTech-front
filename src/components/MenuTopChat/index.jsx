import { useNavigate } from 'react-router-dom'
import './style.less'
import {ArrowBack} from 'react-ionicons'
export function MenuTopChat({nome = 'Tom Hiddleston', online = false}){
    const navigate = useNavigate()

    return(  
        <div className="MenuTopChat">
            <ArrowBack onClick={() => {navigate('/chat')}} cssClasses={'cursor'}/>
            <div className="conteudo">
                <div className="fotoPerfil"></div>
                <div className="textos">
                    <h1>Tom Hiddleston</h1>
                </div>
            </div>
        </div>
    )
}