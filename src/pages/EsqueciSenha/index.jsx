import './style.less'
import { ButtonBigBlue } from '../../components/ButtonBigPurple'
import { InputDefault } from '../../components/InputDefault'
import { TextCaseCadastro } from '../../components/TextCaseCadastro'
import { useState , useEffect } from 'react'
import logo from '../../assets/logo.png'
import { ArrowBackOutline } from 'react-ionicons'
import { Link, useNavigate } from "react-router-dom";

export function EsqueciSenha(){
    const [senhaIncorreta, setSenhaIncorreta] = useState(true)
    const [codigoIncorreto, setCodigoIncorreto] = useState(true)
    const [senhaDiferente,setSenhaDiferente] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/login')
        } else if(localStorage.getItem('status') === 'logado'){

        } else{
            navigate('/login')
        }
}, [])
    
    return (
        <div className='EsqueciSenha'>
                <span>
                <Link to = '/cadastro'>
                    <ArrowBackOutline
                        cssClasses={'ArrowBackOutline'}
                        color={'#00000'}
                        height="250px"
                        width="250px"
                        />
                </Link>
                </span>
                    <div className="container-top">
                        <img src={logo} alt="Logo" />
                        <h1>Esqueci minha <br /> senha</h1>
                        <p>Foi enviado no seu e-mail um código. <br /> Insira-o no campo abaixo:</p>
                    </div>
                    <form action="#">
                        <div className="inputs">
                            <label htmlFor="">
                                Código do email
                            <InputDefault typeInput='text'/>
                            </label>
                            <TextCaseCadastro text='Username incorreto' estado = {codigoIncorreto}/>
                        </div>
                    <ButtonBigBlue/>
                    </form>
        </div>
    )
}