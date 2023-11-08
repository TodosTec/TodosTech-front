import './style.less'
import { MenuTopChat } from '../../components/MenuTopChat'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export function ChatPrivado(){
    const navigate = useNavigate()


    useEffect(() => {
        if(localStorage.getItem('status') === 'deslogado'){
            navigate('/')
        } else if(localStorage.getItem('status') === 'logado'){

        } else{
            navigate('/')
        }
}, [])
    return (
        <div className='ChatPrivado'>
            <MenuTopChat/>

        </div>
    )
}