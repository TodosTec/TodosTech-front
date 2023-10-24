import { BottomMenu } from '../../components/BottomMenu'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import logo from '../../assets/logo.svg'
import { NoticiaComponente } from '../../components/NoticiaComponente'
import { useNavigate } from 'react-router-dom'

export function Noticia(){
    const navigate = useNavigate()
    return (
        <div className="Noticia">
            <img src={logo} alt="" />
            <div className="container">
                <div className="top">
                    <h1 className="titulo">Lorem, ipsum dolor.</h1>
                    <p>Lorem Ipsum Dolor</p>
                </div>
                <div className="noticiasDesc">
                    <NoticiaComponente aoClicar={() => {navigate('/noticiawebview')}}/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                </div>
            </div>
            <NavBarFooter
                classe={2}
            />
        </div>
    )
}