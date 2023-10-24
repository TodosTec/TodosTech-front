import { ButtonOutline } from '../../components/ButtonOutline'
import './style.less'
import logo from '../../assets/logo.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import {useEffect} from 'react'

export function FazerPost(){
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
        <div className="FazerPost">
            <div className="container">
                <img src={logo} alt="" className='logo'/>
                <div className="buttons">
                    <ButtonOutline text='Cancelar'aoClicar={() => {
                        navigate('/')
                    }}/>
                    <ButtonOutline text='Postar'/>
                </div>
                <div className="inputPost">
                    <div className="fotoPerfil"></div>
                    <h1>O que deseja postar hoje?</h1>
                </div>
                <div className="textField">
                    <p>Conteúdo</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}