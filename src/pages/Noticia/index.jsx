import { BottomMenu } from '../../components/BottomMenu'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import logo from '../../assets/logo.png'
import { NoticiaComponente } from '../../components/NoticiaComponente'
import { json, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { urlNoticiaAtom } from '../../states'
import { useAtom } from 'jotai'
export function Noticia() {
    const navigate = useNavigate()
    const apiKey = '247551d41b16459681a804c7ec3271ac'
    const [arrayNoticias, setArrayNoticias] = useState([])
    const [newArrayNoticias, setNewArrayNoticias] = useState([])
    const [objectFirstNoticia, setObjectFirstNoticia] = useState({});
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    const [controle, setControle] = useState(false)
    function getNoticias() {
        let temas = ['lgbt', 'gay', 'lesbian', 'bisexual', 'transgender']
        let valorPageSize = 20
        axios({
            method: "get",
            url: "https://gnews.io/api/v4/search?q=example&apikey=bc3d64dcfb01861b40746c1124de1fd9",
            params: {
                q: 'lgbt',
                to: new Date().toISOString().slice(0, 10),
                from: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
                // qtd: valorPageSize,
                sortby: 'relevance',
                lang: 'pt',
                Max: 30,
                in: 'title,description,content'
            }
        })
            .then((response) => {
                console.log(response.data);
                let newArray = [...arrayNoticias]; // Faz uma cópia do array existente
                let array = []
                for (let j = 0; j < response.data.articles.length; j++) {
                    newArray.push(response.data.articles[j]); // Adiciona ao novo array
                    array.push(response.data.articles[j])
                    localStorage.setItem(`noticias${j + 1}`, JSON.stringify(response.data.articles[j]))
                }
                console.log(array);
                setArrayNoticias(newArray); // Atualiza o estado com o novo array
                setObjectFirstNoticia(response.data.articles[0]);
            })
            .catch((error) => {
                console.log(error.response.status);
                if (error.response.status == 403) {
                    setControle(true)
                }
            });
    }

    useEffect(() => {
        getNoticias()
    }, [])


    useEffect(() => {
        if (controle) {
            for (let j = 0; j < localStorage.length - 1; j++) {
                newArrayNoticias.push(JSON.parse(localStorage.getItem(`noticias${j + 1}`)));
            }
            setObjectFirstNoticia(newArrayNoticias[0])
            navigate('/noticia')
        }
    }, [controle]);

    useEffect(() => {
        if (localStorage.getItem("status") === "deslogado") {
            navigate("/");
        } else if (localStorage.getItem("status") === "logado") {

        }
        else {
            navigate('/')
        }
    }, []);

    return (
        <div className="Noticia">
            <img src={logo} alt="" onClick={() => {
                console.log(newArrayNoticias);
                console.log(controle);
            }} />
            <div className="container">
                <div className="top" style={{ backgroundImage: `url(${objectFirstNoticia.image})` }}>
                    <h1 className="titulo">{objectFirstNoticia.title}</h1>
                    <p>{objectFirstNoticia.author}</p>
                </div>
                <div className="noticiasDesc">
                    {controle
                        ? newArrayNoticias.map((noticia, index) => (
                            noticia && (
                                <NoticiaComponente
                                    key={index}
                                    titulo={noticia.title}
                                    autor={noticia.source.name}
                                    data={new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
                                    aoClicar={() => {
                                        setUrlNoticiaAtomValue(noticia.url);
                                        navigate('/noticiaWebView');
                                    }}
                                />
                            )
                        ))
                        : arrayNoticias.map((noticia, index) => (
                            noticia && (
                                <NoticiaComponente
                                    key={index}
                                    titulo={noticia.title}
                                    autor={noticia.source.name}
                                    data={new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
                                    aoClicar={() => {
                                        setUrlNoticiaAtomValue(noticia.url);
                                        navigate('/noticiaWebView');
                                    }}
                                />
                            )
                        ))
                    }
                </div>

            </div>
            <NavBarFooter
                classe={2}
            />
        </div>
    )
}