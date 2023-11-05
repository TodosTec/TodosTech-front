import { BottomMenu } from '../../components/BottomMenu'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import logo from '../../assets/logo.svg'
import { NoticiaComponente } from '../../components/NoticiaComponente'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { urlNoticiaAtom } from '../../states'
import { useAtom } from 'jotai'
export function Noticia() {
    const navigate = useNavigate()
    const apiKey = '247551d41b16459681a804c7ec3271ac'
    const [arrayNoticias, setArrayNoticias] = useState([])
    const [objectFirstNoticia, setObjectFirstNoticia] = useState({});
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    function getNoticias() {
        let temas = ['lgbt', 'gay', 'lesbian', 'bisexual', 'transgender']
        let valorPageSize = 20
        for (let i = 0; i < temas.length; i++) {
            axios({
                method: "get",
                url: "https://newsapi.org/v2/everything",
                params: {
                    q: temas[i],
                    apiKey: apiKey,
                    to: new Date().toISOString().slice(0, 10),
                    from: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
                    sortBy: 'popularity',
                    coutry: 'br',
                    pageSize: valorPageSize,
                    language: 'pt'
                }
            })
                .then((response) => {
                    // console.log(response.data.articles);
                    for (let j = 0; j < response.data.articles.length; j++) {
                        // console.log(response.data.articles[j]);
                        arrayNoticias.push(response.data.articles[j])
                    }
                    // console.log(arrayNoticias);
                    if (arrayNoticias.length >= 20) {
                        i = 6
                        for (let i = 0; i < arrayNoticias.length; i++) {
                            if (arrayNoticias[i].urlToImage && arrayNoticias[i].title && arrayNoticias[i].author) {
                                setObjectFirstNoticia(arrayNoticias[i]);
                                break; // Sai do loop quando encontra a primeira imagem de URL válida
                            }
                        }
                        // console.log(arrayNoticias.splice(20))
                        // console.log(arrayNoticias[20]);
                        // console.log(arrayNoticias.length - 20);

                    }
                    else {
                        valorPageSize -= response.data.length
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    useEffect(() => {
        getNoticias()
    }, [])
    return (
        <div className="Noticia">
            <img src={logo} alt="" />
            <div className="container">
                <div className="top" style={{ backgroundImage: `url(${objectFirstNoticia.urlToImage})` }}>
                    <h1 className="titulo">{objectFirstNoticia.title}</h1>
                    <p>{objectFirstNoticia.author}</p>
                </div>
                <div className="noticiasDesc">
                    {arrayNoticias.map((noticia, index) => (
                        <NoticiaComponente key={index}
                            autor={noticia.author}
                            titulo={noticia.title}
                            data={new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
                            aoClicar={() => {
                                setUrlNoticiaAtomValue(noticia.url);
                                navigate('/noticiaWebView');
                              }}
                        />
                    ))}
                </div>
            </div>
            <NavBarFooter
                classe={2}
            />
        </div>
    )
}