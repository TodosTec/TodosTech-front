import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import { useAtom } from 'jotai'
import { urlNoticiaAtom } from '../../states'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export function NoticiaWebView() {
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    const navigate = useNavigate()
    // window.addEventListener('message', function(event) {
    //     console.log(event.origin);
    //   });
    useEffect(() => {
        if (localStorage.getItem("status") === "deslogado") {
          navigate("/");
        } else if (localStorage.getItem("status") === "logado") {
        }
        else{
          navigate('/')
        }
      }, []);
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
                aoClicar1={() => {navigate('/home')}}
                aoClicar3={() => {navigate('/chat')}}
                aoClicar4={() => {navigate('/perfil')}}
            />
        </div>
    )
}