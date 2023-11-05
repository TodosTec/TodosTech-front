import './style.less'
import { ArrowBackOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
export function AlterarFotoPerfil(){
    return (
        <div className="AlterarFotoPerfil">
            <div className="container">
                <div className="top">
                    <Link to = '/cadastro'>
                            <ArrowBackOutline
                                cssClasses={'ArrowBackOutline'}
                                color='#f'
                                height="250px"
                                width="250px"
                                />
                        </Link>
                        <h1>Redefinir foto de perfil</h1>
                        <div className="nada"></div>
                </div>
                <div className="alterar">
                    <div className="options">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}