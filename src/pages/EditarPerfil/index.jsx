import './style.less'
import { useState, useEffect } from 'react'
import { EditCampo } from '../../components/EditCampo'
import { ButtonOutline } from '../../components/ButtonOutline'
import {Link, useNavigate} from 'react-router-dom'
import {usernameAtom, idAtom} from '../../states'
import { useAtom } from 'jotai'
import axios from 'axios'
import { urlFotoPerfilAtom } from '../../states'
import { SelectCampo } from '../../components/SelectCampo'
export function EditarPerfil({classe = '', aoClicarRetangulo, aoClicarCancelar}){
    const [nome, setNome] = useState('')
    const [username, setUsername] = useState('')
    const [genero, setGenero] = useState('')
    const [sexualidade, setSexualidade] = useState('')
    const [pronome, setPronome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [nenhumCampoAlterado, setNenhumCampoAlterado] = useState(false)
    const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom)
    const [idAtomValue, setIdAtomValue] = useAtom(idAtom)
    const [ultimoUsuario, setUltimoUsuario] = useState({})
    const [urlFotoPerfilAtomValue, setUrlFotoPerfilAtomValue] = useAtom(urlFotoPerfilAtom)

    const navigate = useNavigate()

    async function alterarPerfil(e){
        e.preventDefault()
        if(nome == '' &&  username == '' && pronome == '' && sexualidade == '' && descricao == ''){
            setNenhumCampoAlterado(true)
        } else{
            setNenhumCampoAlterado(false)
            await axios({
                method: "get",
                url: `https://api-3wfy.onrender.com/api/todostec/selecionar/username/${usernameAtomValue}`
            })
            .then((promisse) => {
                console.log(promisse.data)  
                setUltimoUsuario({
                    ncdusuario: promisse.data.ncdusuario, 
                    cnome: nome != '' ? nome : promisse.data.cnome ,
                    cusername: username != '' ? username : promisse.data.cusername ,
                    csenha: promisse.data.csenha,
                    ctelefone: promisse.data.ctelefone,
                    cemail: promisse.data.cemail,
                    ncontaativa: promisse.data.ncontaativa,
                    ncdpronome: pronome != '' ? pronome : promisse.data.ncdpronome ,
                    ncdgenero: genero != '' ? genero : promisse.data.ncdgenero ,
                    ncdsexualidade: sexualidade != '' ? sexualidade : promisse.data.ncdsexualidade ,
                    cdescricao: descricao != '' ? descricao : promisse.data.cdescricao,
                    clinksite: 'null',
                    clinkfoto: 'null'
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }
    function alterarPerfilReq(){
        axios({
            method: "put",
            url: `https://api-3wfy.onrender.com/api/todostec/atualizar/${idAtomValue}`,
            data: ultimoUsuario
        })
        .then((response) => {
            console.log(response.data);
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

        setNome('')
        setUsername('')
        setGenero('')
        setSexualidade('')
        setPronome('')
        setDescricao('')
    }
    useEffect(() => {
        alterarPerfilReq()
    }, [ultimoUsuario])

    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/')
        } else if(localStorage.getItem('status') === 'logado'){

        } else{
            navigate('/')
        }
}, [])
    useEffect(() => {
        if(usernameAtomValue === '' || idAtomValue === ''){
            localStorage.setItem('status', 'deslogado')
            navigate('/')
        }
    }, [])
    return(
        <div className={classe + " EditarPerfil"}>
            <div className="container">
                <div className="top">
                    <div className="retangulo" onClick={aoClicarRetangulo}></div>
                    <div className="fotoDePerfil" onClick={() => {console.log(sexualidade);}}>
                        <div className="foto" style={{ backgroundImage: `url(${urlFotoPerfilAtomValue})` }}></div>
                        <Link to='/alterarfotoperfil'>
                            <p>Trocar foto de Perfil</p>
                        </Link>
                    </div>
                </div>
                <form className="infoPerfil" onSubmit={alterarPerfil}>
                    <EditCampo valor={nome} 
                    setValor={setNome} 
                    texto='Nome' 
                    tipo='text'
                    // requiredInput = {true}
                    
                    />
                    <EditCampo valor={username} 
                    setValor={setUsername} 
                    texto='Username' 
                    tipo='text'
                    
                    />
                    <SelectCampo 
                        texto='Pronome' 
                        opt1= 'Masculino' 
                        opt2='Feminino' 
                        opt3='Neutro' 
                        opt4='Outro'
                        valor={pronome}
                        setValor={setPronome}
                        // onChange={(e) => {setPronome(e.target.value)}}

                    />
                    <SelectCampo 
                        texto='Gênero' 
                        opt1= 'Masculino' 
                        opt2='Feminino' 
                        opt3='Não binário' 
                        opt4='Outro'
                        valor={genero}
                        setValor={setGenero}
                        // onChange={(e) => {setGenero(e.target.value)}}

                    />
                    <SelectCampo 
                        texto='Sexualidade' 
                        opt1= 'Heterossexual' 
                        opt2='Homossexual' 
                        opt3='Bissexual' 
                        opt4='Panssexual' 
                        opt5='Assexual' 
                        opt6='Outro'
                        valor={sexualidade}
                        setValor={setSexualidade}
                        // onChange={(e) => {setSexualidade(e.target.value)}}

                    />
                        
                    {/* </EditCampo> */}
                    {/* <EditCampo valor={genero} 
                    setValor={setGenero} 
                    texto='Gênero' 
                    tipo='text'
                    
                    />
                    <EditCampo valor={sexualidade} 
                    setValor={setSexualidade} 
                    texto='Sexualidade' 
                    tipo='text'
                    
                    />
                    <EditCampo valor={pronome} 
                    setValor={setPronome} 
                    texto='Pronome' 
                    tipo='text'
                    
                    /> */}
                    <EditCampo valor={descricao} 
                    setValor={setDescricao} 
                    texto='Descrição' 
                    tipo='text'
                    
                    />

                    <p className={nenhumCampoAlterado ? '' : 'sumido'}>Altere algum campo, ou cancele.</p>
                    <div className="buttons">
                        <ButtonOutline text='Definir' tipo='submit'/>
                        <Link to='/perfil'>
                            <ButtonOutline text='Cancelar' classe='cancelar' aoClicar={aoClicarCancelar}/>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

