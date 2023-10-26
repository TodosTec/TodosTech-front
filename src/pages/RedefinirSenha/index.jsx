import './style.less'
import { useNavigate, Link } from 'react-router-dom'
import {ArrowBack} from 'react-ionicons'
import { EditCampo } from '../../components/EditCampo'
import { useState } from 'react'
import {ButtonOutline} from '../../components/ButtonOutline'
import { usernameAtom } from '../../states'
import { useAtom } from 'jotai'
import axios from 'axios'
export function RedefinirSenha(){
    const navigate = useNavigate()
    const [senhaAtual, setSenhaAtual] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [confSenhaNova, setConfSenhaNova] = useState('')
    const [usernameAtomValue, setUsernameAtomValue] = useState(usernameAtom)

    function alterarSenha(){
        axios({method: "get",
            url: `http://localhost:8080/api/todostec/selecionar/${usernameAtomValue}`
        })
        .then((response) => {
            console.log(response.data.csenha);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="RedefinirSenha">
            <div className="container">
                    <div className="retangulo"></div>
                    <div className="info">
                        <ArrowBack onClick={() => {navigate('/perfil')}} cssClasses={'cursor'}/>
                        <h1>Redefinir senha</h1>
                        <div className="invisivel"></div>
                    </div>
                    <form action="" onSubmit={alterarSenha}>
                        <div className="inputs">
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
                        </div>
                        <div className="buttons">
                            <ButtonOutline text='Definir'/>
                            <Link to='/perfil' className='cancelar'>
                                <ButtonOutline text='Cancelar'/>
                            </Link>
                                
                        </div>
                    </form>
            </div>
        </div>
    )
}