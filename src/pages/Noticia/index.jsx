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
    const [newArrayNoticias, setNewArrayNoticias] = useState([
        {
            "title": "Luta por direitos da comunidade LGBT+ e a homofobia no trabalho",
            "url": "https://www.conjur.com.br/2023-jun-30/reflexoes-trabalhistas-luta-direitos-comunidade-lgbt-homofobia-trabalho",
            "image": "https://s.conjur.com.br/img/b/fabiola-marques-tarja.jpeg",
            "publishedAt": "2023-06-30T11:00:00Z", "source": { "name": "Consultor Jurídico", "url": "https://www.conjur.com.br" }
        },

        {
            "title": "América Latina defende maior representação LGBT+ na política, mostra pesquisa",
            "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/america-latina-defende-maior-representacao-lgbt-na-politica-mostra-pesquisa/",
            "image": "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/06/08112120/914842-bandeira_lgbt0502.jpg",
            "publishedAt": "2023-06-27T06:45:00Z", "source": { "name": "Jornal de Brasília", "url": "https://jornaldebrasilia.com.br" }
        },

        {
            "title": "Igreja evangélica e a comunidade LGBT",
            "url": "https://www1.folha.uol.com.br/colunas/juliano-spyer/2023/06/a-caminhada-da-fe-e-da-diversidade.shtml",
            "image": "https://f.i.uol.com.br/fotografia/2023/06/11/1686528936648663a8b09a4_1686528936_3x2_rt.jpg",
            "publishedAt": "2023-06-19T17:38:00Z", "source": { "name": "Folha de S.Paulo", "url": "https://www1.folha.uol.com.br" }
        },

        {
            "title": "Pabllo e Daniela Mercury levam à loucura público da Parada LGBT+ de SP",
            "url": "https://www.metropoles.com/sao-paulo/pabllo-e-daniela-mercury-levam-a-loucura-publico-da-parada-lgbt-de-sp",
            "image": "https://uploads.metropoles.com/wp-content/uploads/2023/06/11190200/publico1-2.jpg",
            "publishedAt": "2023-06-11T22:28:27Z", "source": { "name": "Metrópoles", "url": "https://www.metropoles.com" }
        },

        {
            "title": "Anjo, cheerleader, Arlequina: as fantasias da Parada LGBT+; veja fotos",
            "url": "https://www.metropoles.com/sao-paulo/anjo-cheerleader-arlequina-as-fantasias-da-parada-lgbt-veja-fotos",
            "image": "https://uploads.metropoles.com/wp-content/uploads/2023/06/11170902/fantasia4-1.jpg",
            "publishedAt": "2023-06-11T20:17:57Z", "source": { "name": "Metrópoles", "url": "https://www.metropoles.com" }
        },

        {
            "title": "Sob sol e embalada por 19 trios elétricos, multidão segue Parada LGBT+",
            "url": "https://www.metropoles.com/sao-paulo/sob-sol-e-embalada-por-19-trios-eletricos-multidao-segue-parada-lgbt",
            "image": "https://uploads.metropoles.com/wp-content/uploads/2023/06/11151752/parada11.jpg",
            "publishedAt": "2023-06-11T17:39:18Z", "source": { "name": "Metrópoles", "url": "https://www.metropoles.com" }
        },

        {
            "title": "Parada do Orgulho LGBT+ agita Paulista neste domingo",
            "url": "https://www.brasil247.com/regionais/sudeste/parada-do-orgulho-lgbt-agita-paulista-neste-domingo",
            "image": "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-brasil247/swp/jtjeq9/media/20210923090920_b5669de26c894381be00cce18ed8cb1d97813de44567cad13991fb47c284b942.jpg",
            "publishedAt": "2023-06-11T15:53:44Z", "source": { "name": "Brasil 247", "url": "https://www.brasil247.com" }
        },

        {
            "title": "Após edição marcada por eleições, Parada LGBT+ de SP mira luta social",
            "url": "https://www.metropoles.com/sao-paulo/apos-edicao-marcada-por-eleicoes-parada-lgbt-de-sp-mira-luta-social",
            "image": "https://uploads.metropoles.com/wp-content/uploads/2023/06/09144954/pabllo1-1.jpg",
            "publishedAt": "2023-06-11T08:02:43Z", "source": { "name": "Metrópoles", "url": "https://www.metropoles.com" }
        },

        {
            "title": "7ª parada LGBT do Cruzeiro/Sudoeste/Octogonal abre agenda do projeto LGBT em Ação",
            "url": "https://jornaldebrasilia.com.br/entretenimento/eventos/7a-parada-lgbt-do-cruzeiro-sudoeste-octogonal-abre-o-circuito-de-manifestacoes-do-projeto-lgbt-em-acao/",
            "image": "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/07/10104513/bandeira-lgbt-scaled.jpg",
            "publishedAt": "2023-06-09T07:42:00Z", "source": { "name": "Jornal de Brasília", "url": "https://jornaldebrasilia.com.br" }
        }
    ])
    const [objectFirstNoticia, setObjectFirstNoticia] = useState({});
    const [urlNoticiaAtomValue, setUrlNoticiaAtomValue] = useAtom(urlNoticiaAtom)
    const [controle, setControle] = useState(false)
    function getNoticias() {
        let temas = ['lgbt', 'gay', 'lesbian', 'bisexual', 'transgender']
        let valorPageSize = 20
        axios({
            method: "get",
            url: "https://gnews.io/api/v4/search?q=example&apikey=6a057afdf7b0a712badd9ab73761d017",
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
                if (error.response.status == 403 || error.response.status == 429) {
                    setControle(true)
                    setObjectFirstNoticia(newArrayNoticias[0]);

                }
            });
    }

    useEffect(() => {
        getNoticias()
    }, [])



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
            <img src={logo} alt="" />
            <div className="container">
                <div className="top" style={{ backgroundImage: `url(${objectFirstNoticia.image})` }}>
                    <h1 className="titulo">{objectFirstNoticia.title}</h1>
                </div>
                <div className="noticiasDesc">
                    {controle
                        ? newArrayNoticias.map((noticia, index) => (
                            noticia && noticia.source ? (
                                <NoticiaComponente
                                    key={index}
                                    titulo={noticia.title}
                                    data={new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
                                    aoClicar={() => {
                                        setUrlNoticiaAtomValue(noticia.url);
                                        navigate('/noticiaWebView');
                                    }}
                                />
                            ) : null
                        ))
                        : arrayNoticias.map((noticia, index) => (
                            noticia && noticia.source ? (
                                <NoticiaComponente
                                    key={index}
                                    titulo={noticia.title}
                                    data={new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
                                    aoClicar={() => {
                                        setUrlNoticiaAtomValue(noticia.url);
                                        navigate('/noticiaWebView');
                                    }}
                                />
                            ) : null
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