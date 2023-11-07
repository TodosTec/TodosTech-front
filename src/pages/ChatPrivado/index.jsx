import './style.less'
import { MenuTopChat } from '../../components/MenuTopChat'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export function ChatPrivado(){
    const navigate = useNavigate()


    return (
        <div className='ChatPrivado'>
            <MenuTopChat/>

        </div>
    )
}