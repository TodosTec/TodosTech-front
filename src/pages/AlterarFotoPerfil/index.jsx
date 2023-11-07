import './style.less'
import { ArrowBackOutline } from 'react-ionicons'
import { Link, useNavigate } from 'react-router-dom'
import {ButtonOutline} from '../../components/ButtonOutline'
import { usernameAtom } from '../../states' 
import { useAtom } from 'jotai'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { idAtom } from '../../states'

export function AlterarFotoPerfil(){
    const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom)
    const [ultimoUsuario, setUltimoUsuario] = useState({})
    const [valorFoto, setValorFoto] = useState()
    const [idAtomValue, setIdAtomValue] = useAtom(idAtom)
    const [confirme, setConfirme] = useState(false)
    const navigate = useNavigate()

    async function alterarPerfil(e){
        // e.preventDefault()
            await axios({
                method: "get",
                url: `https://api-3wfy.onrender.com/api/todostec/selecionar/username/${usernameAtomValue}`
            })
            .then((promisse) => {
                setUltimoUsuario({
                    ncdusuario: promisse.data.ncdusuario, 
                    cnome: promisse.data.cnome ,
                    cusername: promisse.data.cusername ,
                    csenha: promisse.data.csenha,
                    ctelefone: promisse.data.ctelefone,
                    cemail: promisse.data.cemail,
                    ncontaativa: promisse.data.ncontaativa,
                    ncdpronome: promisse.data.ncdpronome ,
                    ncdgenero: promisse.data.ncdgenero ,
                    ncdsexualidade: promisse.data.ncdsexualidade ,
                    cdescricao: promisse.data.cdescricao,
                    clinksite: 'null',
                    clinkfoto: valorFoto
                })
            })
            .catch((error) => {
                console.log(error)
            })

            setarUsuario()

    }
    function setarUsuario(){
        console.log(ultimoUsuario);
        if(Object.keys(ultimoUsuario).length === 0){
            setConfirme(true)
        }
            axios({
                method: "put",
                url: `https://api-3wfy.onrender.com/api/todostec/atualizar/${idAtomValue}`,
                data: ultimoUsuario
            })  
            .then((response) => {
                // console.log(response.data);
                if(response.data.includes("Usuario atualizado com sucesso.")){
                    // alert('Faça login para concluir.')
                    navigate('/perfil')
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div className="AlterarFotoPerfil">
            <div className="container">
                <div className="top">
                    <Link to = '/editarperfil'>
                            <ArrowBackOutline
                                cssClasses={'ArrowBackOutline'}
                                color='#f'
                                height="250px"
                                width="250px"
                                />
                        </Link>
                        <h1>Redefinir foto de perfil</h1>
                        <div className="nada"></div>
                </div>
                <div className="alterar">
                    <p>Escolha uma opção:</p>
                    <div className="options">
                        <div className="linha1 linha">
                            <button 
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png')}}>
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png" alt="" />
                            </button>
                            <button 
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png')}}>
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png" alt="" />
                            </button>
                            <button 
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png')}}>
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png" alt="" />
                            </button>
                        </div>
                        <div className="linha2 linha">
                            <button
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159364.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159364.png')}}> 
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159364.png" alt="" />
                            </button>
                            <button 
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_avatar_people_person_icon_159369.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_avatar_people_person_icon_159369.png')}}>
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_black_tone_avatar_people_person_icon_159369.png" alt="" />
                            </button>
                            <button 
                                className={valorFoto == 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png' ? 'select' : ''}
                                onClick={() => {setValorFoto('https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png')}}>
                                <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    confirme ? (
                        <p>Aperte em definir denovo para confirmar</p>
                    ) : null
                }
                <div className="buttons">
                    <ButtonOutline text='Cancelar' aoClicar={() => {navigate('/editarperfil')}}/>
                    <ButtonOutline text='Definir' aoClicar={() => {alterarPerfil()}}/>
                </div>
            </div>
        </div>
    )
}