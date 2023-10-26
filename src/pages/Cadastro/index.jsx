    // Cadastro.js
    import './style.less'
    import { ButtonBigBlue } from '../../components/ButtonBigPurple'
    import { InputDefault } from '../../components/InputDefault'
    import { TextCaseCadastro } from '../../components/TextCaseCadastro'
    import { useEffect, useState } from 'react'
    import logo from '../../assets/logo.svg'
    import axios from 'axios';  
    import { Link, useNavigate } from 'react-router-dom'
    import { useAtom } from 'jotai'
    import { idAtom } from '../../states'
    import { usernameAtom } from '../../states'

    export function Cadastro() {
        const [senhaIncorreta, setSenhaIncorreta] = useState(true)
        const [usernameIncorreto, setUsernameIncorreto] = useState(true)
        const [nomeUsuario, setNomeUsuario] = useState('')
        const [senha, setSenha] = useState('')
        const [idAtomValue, setIdAtomValue] = useAtom(idAtom);
        const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom);
        const navigate = useNavigate();

        function logar(e) {
            e.preventDefault()
            axios({
                method: "post",
                url: "http://localhost:8080/api/todostec/selecionar/login",
                data: {
                    cusername: nomeUsuario,
                    csenha: senha,
                },
            })
                .then((promisse) => {
                if (promisse.data === "Senha incorreta") {
                    setSenhaIncorreta(false)
                } else if (promisse.data.includes('Optional')) {
                    const regex = /ncdusuario=(\d+)/;
                    const match = promisse.data.match(regex);
                
                    if (match) {
                        const valorNcdusuario = match[1];
                        setIdAtomValue(parseInt(valorNcdusuario));
                        setUsernameAtomValue(nomeUsuario);
                        localStorage.setItem('status', 'logado');
                        navigate('/');
                    } else {
                        console.log('Valor de ncdusuario não encontrado');
                    }
                }
                else if (promisse.data === "Nome de usuário inexistente") {
                    setUsernameIncorreto(false)
                }
                })

                .catch((error) => {
                    console.log(error)
                });
        }
        useEffect(() => {
            if(localStorage.getItem('status') === 'deslogado'){
                navigate('/login')
            } else if(localStorage.getItem('status') === 'logado'){
    
            } else{
                navigate('/login')
            }
    }, [])
        return (
            <div className='Cadastro'>
                <img src={logo} alt="Logo" />
                <form action="#" onSubmit={logar}>
                    <div className="form-inputs">
                        <label htmlFor="">
                            Nome de usuário
                            <InputDefault typeInput='text' valor={nomeUsuario} setValor={setNomeUsuario} />
                        </label>
                        <TextCaseCadastro text='Username incorreto' estado={usernameIncorreto} classe='erros' />
                        <label htmlFor="">
                            Senha
                            <InputDefault typeInput='password' valor={senha} setValor={setSenha} />
                        </label>
                        <TextCaseCadastro text='senhaIncorreta' estado={senhaIncorreta} classe='erros' />
                        <Link className='esqueciSenha' to='/esqueciSenha'>Esqueci minha senha</Link>
                    </div>
                    <ButtonBigBlue type="submit" />
                </form>
            </div>
        )
    }
