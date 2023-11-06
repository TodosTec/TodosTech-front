import { useState } from 'react';
import { ButtonOutline } from '../../components/ButtonOutline';
import './style.less';
import logo from '../../assets/logo.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {idAtom, urlFotoPerfilAtom} from '../../states'
import { useAtom } from 'jotai';
export function FazerPost() {
    const navigate = useNavigate();
    const [postText, setPostText] = useState('');
    const [idAtomValue, setIdAtomValue] = useAtom(idAtom)
    const [urlFotoPerfilAtomValue, setUrlFotoPerfilAtomValue] = useAtom(urlFotoPerfilAtom)
    const handlePost = () => {
        // Aqui você pode enviar o texto do post para onde for necessário
        if (postText) {
            axios({
                method: "POST",
                url: "http://localhost:8080/api/todostec/post/inserir",
                data: {ctexto: postText, ncdusuario: idAtomValue}
            })
            .then((promisse) => {
                if(promisse.data == true){
                    navigate('/perfil')
            }
            })
            .catch((error) => {
                console.log(error);
            })
            setPostText('');
        }
    };

    const handleInputChange = (e) => {
        setPostText(e.target.value);
    };

    useEffect(() => {
        if (localStorage.getItem('status') === 'deslogado') {
            navigate('/login');
        } else if (localStorage.getItem('status') === 'logado') {
            // Se necessário, adicione lógica adicional para o estado "logado"
        } else {
            navigate('/login');
        }
    }, []);

    const buttonStyle = {
        backgroundColor: postText ? '#FD3D6C' : '',
        pointerEvents: postText ? 'auto' : 'none',
    };

    return (
        <div className="FazerPost">
            <div className="container">
                <img src={logo} alt="" className="logo" />
                <div className="buttons">
                    <ButtonOutline
                        text="Cancelar"
                        aoClicar={() => {
                            navigate('/');
                        }}
                    />
                    <ButtonOutline
                        text="Postar"
                        aoClicar={() => {handlePost()}}
                        style={buttonStyle}
                    />
                </div>
                <div className="inputPost">
                    <div className="fotoPerfil" style={{ backgroundImage: `url(${urlFotoPerfilAtomValue})` }}></div>
                    <h1>O que deseja postar hoje?</h1>
                </div>
                <div className="textField">
                    <p>Conteúdo</p>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={postText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
