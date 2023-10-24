import './style.less'
import {Home, HomeOutline, MailOutline} from 'react-ionicons'
import {NewspaperOutline} from 'react-ionicons'
import {BasketOutline} from 'react-ionicons'
import {Mail} from 'react-ionicons'
import {PersonCircleOutline} from 'react-ionicons'
import { useNavigate } from 'react-router-dom'

export function NavBarFooter({classe = 1}){
    const navigate = useNavigate()
    function navegar(lugar){
        // console.log(lugar)
        navigate(`${lugar}`)
    }
    
    return(
        <nav className='NavBarFooter'>
            <button className={classe === 1 ? 'principal': ''} onClick={() => {navegar('/')}} ><HomeOutline color='#FD3D6C'/></button>
            <button className={classe === 2 ? 'principal': ''} onClick={() => {navegar('/noticia')}} ><NewspaperOutline color='#FD3D6C'/></button>
            {/* <button className={classe === 3 ? 'principal': ''} onClick={navegar()} ><BasketOutline/></button> */}
            <button className={classe === 4 ? 'principal': ''} onClick={() =>{navegar('/chat')}} ><MailOutline color='#FD3D6C'/></button>
            <button className={classe === 5 ? 'principal': ''} onClick={() => {navegar('/perfil')}} ><PersonCircleOutline color='#FD3D6C'/></button>
        </nav>
    )
}