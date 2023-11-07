import './style.less'
import { useNavigate, Link } from 'react-router-dom'
import {ArrowBack} from 'react-ionicons'
import { EditCampo } from '../../components/EditCampo'
import { useEffect, useState } from 'react'
import {ButtonOutline} from '../../components/ButtonOutline'
import { usernameAtom, idAtom } from '../../states'
import { useAtom } from 'jotai'
import axios from 'axios'
export function RedefinirSenha(){
    const navigate = useNavigate()
    const [senhaAtual, setSenhaAtual] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [confSenhaNova, setConfSenhaNova] = useState('')
    const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom)
    const [idAtomValue, setIdAtomValue] = useAtom(idAtom)
    const [senhaDiferente, setSenhaDiferente] = useState(false)
    const [senhaAtualDiferente, setSenhaAtualDiferente] = useState(false)
    const [senhaAtualIgualNova, setSenhaAtualIgualNova] = useState(false)
    const [ultimoUsuario, setUltimoUsuario] = useState({})
    async function alterarSenha(e){
        e.preventDefault()
        if(senhaNova == confSenhaNova){
            setSenhaDiferente(false)
            await axios({method: "get",
                url: `https://api-3wfy.onrender.com/api/todostec/selecionar/username/${usernameAtomValue}`
            })
            .then((promisse) => {
                console.log(promisse);
                if(promisse.data.csenha == senhaAtual){
                    setSenhaAtualDiferente(false)
                    if(senhaAtual == senhaNova){
                        setSenhaAtualIgualNova(true)
                    }
                    else{
                        setSenhaAtualIgualNova(false)
                        alterarSenhaReq()
                        setUltimoUsuario({
                            ncdusuario: promisse.data.ncdusuario, 
                            cnome: promisse.data.cnome,
                            cusername: promisse.data.cusername ,
                            csenha: senhaNova,
                            ctelefone: promisse.data.ctelefone,
                            cemail: promisse.data.cemail,
                            ncontaativa: promisse.data.ncontaativa,
                            ncdpronome: promisse.data.ncdpronome ,
                            ncdgenero: promisse.data.ncdgenero ,
                            ncdsexualidade: promisse.data.ncdsexualidade ,
                            cdescricao: promisse.data.cdescricao,
                            clinksite: 'null',
                            clinkfoto: 'null'
                        })
                    }
                }
                else{
                    setSenhaAtualDiferente(true)
                }
            })
            .catch((error) => {
                console.log(error);
            })    
        }
        else{
            setSenhaDiferente(true)
        }
        console.log(usernameAtomValue);
    }
    function alterarSenhaReq(){
        console.log(ultimoUsuario);
        axios({
            method: "put",
            url: `https://api-3wfy.onrender.com/api/todostec/atualizar/${idAtomValue}`,
            data: ultimoUsuario
        })
        .then((response) => {
            console.log(response);
            if(response.data.includes("Usuario atualizado com sucesso.")){
                // console.log('entrou')
                // setUsernameAtomValue(ultimoUsuario.cusername)
                navigate('/')
                alert('Faça login para concluir.')
            }
        })
        .catch((error) => {
            console.log(error);
        })
        // console.log(perfilNovo)

        setConfSenhaNova('');
        setSenhaAtual('');
        setSenhaNova('');
    }
    useEffect(() => {
        alterarSenhaReq()
    }, [ultimoUsuario])
    return (
        <div className="RedefinirSenha">
            <div className="container">
                    {/* <div className="retangulo"></div> */}
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
                                tipo='password'
                                
                                />
                                <p className={senhaAtualDiferente ? '' : 'sumido'}>Senha atual incorreta.</p>
                            <EditCampo
                                texto='Nova senha'
                                setValor={setSenhaNova}
                                requiredInput = {true}
                                valor={senhaNova}
                                tipo='password'
                                minimoLetra='8'
                                />
                            
                            <EditCampo
                                texto='Confirme a nova senha'
                                setValor={setConfSenhaNova}
                                requiredInput = {true}
                                valor={confSenhaNova}
                                tipo='password'
                                minimoLetra='8'
                                />
                                <p className={senhaDiferente ? '' : 'sumido'}>As senhas não correspondem.</p>
                                <p className={senhaAtualIgualNova ? '' : 'sumido'}>A senha nova não é diferente da atual</p>
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