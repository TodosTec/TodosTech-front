import { BottomMenu } from '../../components/BottomMenu'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'
import logo from '../../assets/logo.svg'
import { NoticiaComponente } from '../../components/NoticiaComponente'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export function Noticia(){
    const navigate = useNavigate()
    const apiKey = '247551d41b16459681a804c7ec3271ac'
    const [arrayNoticias, setArrayNoticias] = useState([])
    function getNoticias(pageSize){
        let tema = ['lgbt', 'gay', 'lesbian', 'bisexual', 'transgender']
        let count = 0
        let controle = 5
        let arrayNoticiasControle = []
        for (let i = 0; i < controle; i++) {            
            axios({
                method: "get",
                url: "https://newsapi.org/v2/everything",
                params: {
                    q: tema[i],
                    apiKey: apiKey,
                    to: new Date().toISOString().slice(0, 10),
                    from: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
                    sortBy: 'popularity',
                    coutry: 'br',
                    pageSize: 20,
                    language: 'pt'
                }
            })
            .then((promisse) => {
                console.log(promisse.data.articles);
                count += promisse.data.articles.length
                console.log('loop' ,i + 1, 'count', count);
                for (let j = 0; j < promisse.data.articles.length; j++){
                    // console.log(promisse.data.articles[j]);
                    arrayNoticiasControle.push(promisse.data.articles[j])
                }
                console.log(pageSize);
                if(count >= pageSize){
                    console.log('entrou')
                    controle = 10
                };
                // console.log(promisse.data.articles);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        console.log(arrayNoticiasControle);
        setArrayNoticias(arrayNoticiasControle);
    }
    return (
        <div className="Noticia">
            <img src={logo} alt="" />
            <div className="container">
                <div className="top">
                    <h1 className="titulo">Lorem, ipsum dolor.</h1>
                    <p>Lorem Ipsum Dolor</p>
                </div>
                <div className="noticiasDesc">
                    <NoticiaComponente aoClicar={() => {navigate('/noticiawebview')}}/>
                    <NoticiaComponente aoClicar={() => {getNoticias(20)}}/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                    <NoticiaComponente/>
                </div>
            </div>
            <NavBarFooter
                classe={2}
            />
        </div>
    )
}