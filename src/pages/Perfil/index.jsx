import './style.less'
import { useState, useEffect } from 'react';
import { BottomMenu } from '../../components/BottomMenu';
import { NavBarFooter } from '../../components/NavBarFooter'
import { SettingsOutline } from 'react-ionicons'
import { EditarPerfil } from '../../pages/EditarPerfil'
import { useNavigate } from 'react-router-dom';
import {Post} from '../../components/Post'
export function Perfil() {
    const navigate = useNavigate()
    const [showConfig, setShowConfig] = useState(true)
    const [tooglePrincipalComponent, setTooglePrincipalComponent] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/login')
        } else if(localStorage.getItem('status') === 'logado'){

        } else{
            navigate('/login')
        }
}, [])
    return (
        <div className='conserto'>
            <div className={tooglePrincipalComponent ? 'Perfil zindex' : 'Perfil'}>
                <div className="conig">
                    <SettingsOutline color='white' width='30px' height='30px' onClick={() => {
                        setShowConfig(false)
                    }} />
                </div>
                <div className="container">
                    <div className="info">
                        <div className="foto"></div>
                        <h1>Tom Hiddleston</h1>
                        <div className="textos">
                            <p className="username">@TomHiddleston</p>
                            <p>Meu nome é Tom Hiddleston, me descobri dentro da comunidade como há mais de 10 anos, atualmente busco ajudar pessoas no processo de aceitação.</p>
                            <div className='complementos'>
                                <span>Masculino</span>
                                <span> · </span>
                                <span>Bissexual</span>
                                <span> · </span>
                                <span>Assexual</span>
                            </div>
                        </div>
                    </div>
                        <div className="posts-container">
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                        </div>
                    <BottomMenu classe={showConfig ? 'mostrar' : ''} aoClicarRetangulo={() => {
                        setShowConfig(true)
                    }}
                    aoClicarOpt1={() => {
                        setTooglePrincipalComponent(true)
                    }}
                    aoClicarSair={() => {
                        navigate('/login')
                        localStorage.setItem('status', 'deslogado')
                    }}
                    aoClicarOpt2={() => {
                        navigate('/redefinirsenha')
                    }}
                    
                    />
                    <NavBarFooter classe={5} 
                        aoClicar4={() => {navigate('/chat')}}
                        aoClicar1={() => {navigate('/')}}

                    />
                </div>
            </div>
            <EditarPerfil classe={tooglePrincipalComponent ? '': 'zindex'} 
                aoClicarRetangulo={() => {setTooglePrincipalComponent(false)}}
                aoClicarCancelar={() => {setTooglePrincipalComponent(false)}}
            />

        </div>

    )
} 