import './style.less';
import logo from '../../assets/logo.svg';
import { NavBarFooter } from '../../components/NavBarFooter';
import { Post } from '../../components/Post';
import { CircleFlutuamteButton } from '../../components/CircleFlutuanteButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export function Home() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [postsArray, setPostsArray] = useState([]);
    const [postRepetido, setPostRepetido] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('status') === 'deslogado') {
            navigate('/login');
        } else if (localStorage.getItem('status') !== 'logado') {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            if (scrollHeight - scrollTop === clientHeight) {
                console.log('Chegou no final do scroll');
                getPosts();
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    useEffect(() => {
        if (postsArray.length < 50) {
            getPosts();
        }
    }, []);

    async function getPosts() {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/api/todostec/post/selecionar/random');
            const newPosts = response.data;
            setPostsArray(prevPosts => [...prevPosts, ...newPosts]);
            if (response.data.length < 50 && postsArray.length >= 50) {
                console.log('entrou');
                setPostRepetido(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="Home">
            <img src={logo} alt="" />
            <div className="container" ref={containerRef} style={{ height: '400px', overflowY: 'scroll' }}>
                {postsArray.map((post, index) => (
                            <Post
                                key={index}
                                nome={post.usuario.cnome}
                                text={post.ctexto}
                                username={post.usuario.cusername}
                                // repetido={true}
                                aoClicar={() => {
                                    // setUrlNoticiaAtomValue(noticia.url);
                                    // navigate('/noticiaWebView');
                                }}
                            />
                ))}
                {loading ? <p className='carregando'>Carregando Posts...</p> : null}
            </div>
            <div className="bottomItens">
                <CircleFlutuamteButton
                    aoClicar={() => {
                        // navigate('/fazerPost')
                        console.log(postsArray);
                    }}
                />
                <NavBarFooter
                    classe={1}
                    aoClicar5={() => {
                        navigate('/Perfil');
                    }}
                    aoClicar4={() => {
                        navigate('/chat');
                    }}
                />
            </div>
        </div>
    );
}
