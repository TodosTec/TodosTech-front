import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import { useAtom } from 'jotai'
import { urlNoticiaAtom } from '../../states'
import { useNavigate } from 'react-router-dom'
export function NoticiaWebView() {
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    const navigate = useNavigate()
    // window.addEventListener('message', function(event) {
    //     console.log(event.origin);
    //   });
      
    return (
        <div className="NoticiaWebView">
            <div className="container">
                <iframe
                    src={urlNoticiaAtomValue}
                    title="Noticia"
                    // width="100%"
                    // height="600px"
                />
                <p></p>
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