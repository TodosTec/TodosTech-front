import { useNavigate, Link } from 'react-router-dom'
import './style.less'
import {ArrowBack} from 'react-ionicons'
import { EditCampo } from '../../components/EditCampo'
import { useState } from 'react'
import {ButtonOutline} from '../../components/ButtonOutline'
export function RedefinirSenha(){
    const navigate = useNavigate()
    const [senhaAtual, setSenhaAtual] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [confSenhaNova, setConfSenhaNova] = useState('')


    return (
        <div className="RedefinirSenha">
            <div className="container">
                <div className="top">
                    <div className="retangulo"></div>
                    <div className="info">
                        <ArrowBack onClick={() => {navigate('/perfil')}} cssClasses={'cursor'}/>
                        <h1>Redefinir senha</h1>
                        <div className="invisivel"></div>
                    </div>
                    <form action="">
                        <EditCampo 
                            texto='Senha atual' 
                            setValor={setSenhaAtual} 
                            valor={senhaAtual}
                            requiredInput = {true}
                            />
                        <EditCampo 
                            texto='Nova senha' 
                            setValor={setSenhaNova} 
                            requiredInput = {true}
                            valor={senhaNova}/>
                            
                        <EditCampo 
                            texto='Confirme a nova senha' 
                            setValor={setConfSenhaNova} 
                            requiredInput = {true}
                            valor={confSenhaNova}/>
                    </form>
                </div>
                <div className="buttons">
                    <ButtonOutline text='Definir'/>
                    <Link to='/perfil' className='cancelar'>
                        <ButtonOutline text='Cancelar'/>
                    </Link>
                        
                </div>
            </div>
        </div>
    )
}