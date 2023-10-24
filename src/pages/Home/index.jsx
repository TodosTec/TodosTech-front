import './style.less'
import logo from '../../assets/logo.svg'
import {NavBarFooter} from '../../components/NavBarFooter'
import { Post } from '../../components/Post'
import { PostEmpresa } from '../../components/PostEmpresa'
import { CircleFlutuamteButton } from '../../components/CircleFlutuanteButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export function Home(){
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/login')
        } else if(localStorage.getItem('status') === 'logado'){

        } else{
            navigate('/login')
        }
}, [])
    return(
        <div className="Home">
            <img src={logo} alt="" />
            <div className="container">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <PostEmpresa/>
                <PostEmpresa/>
                <PostEmpresa/>
            </div>
            <div className="bottomItens">
                <CircleFlutuamteButton aoClicar={() => {
                    navigate('/fazerPost')
                }}/>
                <NavBarFooter classe={1} 
                        aoClicar5={() => {navigate('/Perfil')}}
                        aoClicar4={() => {navigate('/chat')}}
                    />
            </div>
        </div>
    )
}