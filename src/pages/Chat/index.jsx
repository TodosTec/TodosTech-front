import { BarraDePesquisa } from '../../components/BarraDePesquisa'
import { ButtonLightBlue } from '../../components/ButtonLightBlue'
import { Contato } from '../../components/Contato'
import { NavBarFooter } from '../../components/NavBarFooter'
import './style.less'   
import {Perfil} from '../../assets/62b8395d-4b5c-4efa-ba2f-088d359eb284.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { socket, usernameAtom, room } from '../../states'
import io from 'socket.io-client'
import { useAtom } from 'jotai'

export function Chat() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom);
    const [socketValue, setSocketValue] = useAtom(socket);
    const [roomValue, setRoomValue] = useAtom(room);
    return (
        <div className='Chat'>
            
    <div className="consertoPesquisa">
                <BarraDePesquisa/>
            </div>
            <section className="main">
                <div className="mensagens">
                    <ButtonLightBlue/>
                    <div className="listaContatos">
                        <Contato 
                            aoClicar={() => {
                                setRoomValue('Queer')
                                navigate('/chatprivado')
                            }} 
                            ultimaMensagem=''
                            nome='Queer'
                            foto='https://img.freepik.com/vetores-premium/vector-bandeira-lgbt-bandeira-do-arco-iris-orgulho-lgbtq_616756-500.jpg?w=996'
                        />
                        <Contato 
                            aoClicar={() => {
                                setRoomValue('Trans People')
                                navigate('/chatprivado')
                            }} 
                            ultimaMensagem=''
                            nome='Trans People'
                            foto='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1024px-Transgender_Pride_flag.svg.png'
                        />
                        <Contato 
                            aoClicar={() => {
                                setRoomValue('Assexual')
                                navigate('/chatprivado')
                            }}
                            ultimaMensagem=''
                            nome='Assexual'
                            foto='https://static.wixstatic.com/media/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png/v1/fill/w_640,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png'

                        />
                    </div>
                </div>
                <NavBarFooter classe={4} 
                    aoClicar5={() => {navigate('/Perfil')}}
                    aoClicar1={() => {navigate('/home')}}
                />
            </section>
        </div>
    );
}

            

