import { BarraDePesquisa } from '../../components/BarraDePesquisa'
import { ButtonLightBlue } from '../../components/ButtonLightBlue'
import { Contato } from '../../components/Contato'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'   
import {Perfil} from '../../assets/62b8395d-4b5c-4efa-ba2f-088d359eb284.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export function Chat(){
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/')
        } else if(localStorage.getItem('status') === 'logado'){
            
        } else{
            navigate('/')
        }
}, [])
    return(
        <div className='Chat'>
            <div className="consertoPesquisa">
                <BarraDePesquisa/>
            </div>
            <section className="main">
            <div className="mensagens">
                <ButtonLightBlue/>
                    <div className="listaContatos">
                        <Contato aoClicar={() => {navigate('/chatprivado')}}/>
                        <Contato/>
                        <Contato/>
                        <Contato/>
                    </div>
                </div>
                    <NavBarFooter classe={4} 
                        aoClicar5={() => {navigate('/Perfil')}}
                        aoClicar1={() => {navigate('/home')}}
                        
                    />
                </section>
        </div>
    )
}