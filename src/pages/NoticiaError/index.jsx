import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import { useAtom } from 'jotai'
import { urlNoticiaAtom } from '../../states'
import { useNavigate } from 'react-router-dom'
export function NoticiaError() {
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    const navigate = useNavigate()
    return (
        <div className="NoticiaWebView">
            <div className="container">
                <p>nkajfdjsnsljk</p>
            </div>
            <NavBarFooter 
                classe={2}
                aoClicar1={() => {navigate('/')}}
                aoClicar3={() => {navigate('/chat')}}
                aoClicar4={() => {navigate('/perfil')}}
            />
        </div>
    )
}