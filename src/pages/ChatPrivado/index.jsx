import './style.less';
import { MenuTopChat } from '../../components/MenuTopChat';
import { MenuEnviarMensagem } from '../../components/MenuEnviarMensagem';
import { MensagemEnviada } from '../../components/MensagemEnviada';
import { MensagemRecebida } from '../../components/MensagemRecebida';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { room, socket, usernameAtom } from '../../states';
import { useAtom } from 'jotai';
import io from 'socket.io-client';
import axios from 'axios';
export function ChatPrivado() {
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState('');
    const [socketValue, setSocketValue] = useState(null);
    const [roomValue, setRoomValue] = useAtom(room);
    const [usernameAtomValue, setUsernameAtomValue] = useAtom(usernameAtom);
    const [arrayMessages, setArrayMessages] = useState([])
    let countUseEffect = 0
    let countUseEffect2 = 0

    const [info, setInfo] = useState({
        username: usernameAtomValue,
        nomeChat: roomValue
    })
    function adicionarMensagemRecebida() {
        if(mensagem !== ''){
            const data = {
                nomeChat: roomValue,
                username: usernameAtomValue,
                message: mensagem
            }
            socketValue.emit('message', data)
            setMensagem('')
        }
    }
    function getMessages() {
        socketValue.on("message", (data) => {
            console.log(data);
            setArrayMessages(data);
            // console.log(data);
        })
        countUseEffect2++
    }

    function getHistoryMessages() {
        axios({
            method: "get",
            url: 'https://api-3wfy.onrender.com/api/todostec/chat/findall/mongo'
        })
        .then((promisse) => {
            // console.log(promisse.data);
            const updatedMessages = [...arrayMessages]; // Cria uma cópia do array de mensagens
            for (let i = 0; i < promisse.data.length; i++) {
                if (promisse.data[i].nomeChat === roomValue) {
                    updatedMessages.push(promisse.data[i]); // Adiciona a mensagem à cópia do array
                }
            }
            setArrayMessages(updatedMessages); // Atualiza o estado com a nova cópia do array
        })
        .catch((error) => {console.log(error);})
    }

    useEffect(() => {
        if (countUseEffect < 1) {
            const clientSocket = io.connect('https://servidormude.onrender.com')
            clientSocket.emit('set_info', info)
            // console.log(clientSocket);
            // setSocketValue(io.connect('http://localhost:3001'))
            setSocketValue(clientSocket)
        }
        countUseEffect++
    }, [])

    useEffect(() => {
        if (socketValue != null) {
            // console.log('entrousa');
            if (countUseEffect2 < 1) {
                getMessages()
                countUseEffect2++
            }
        }
        else {
            // console.log('djnak');
        }

    }, [socketValue])

    useEffect(() => {
    }, [arrayMessages]);

    useEffect(() => {
        if(arrayMessages.length == 0){
            getHistoryMessages()
        }
    }, [])
    return (
        <div className='ChatPrivado'>
            <MenuTopChat
                aoClicar={() => {
                    socketValue.close()
                    navigate('/chat');
                }}
                nome={roomValue}
                foto={roomValue == 'Queer' ? 'https://img.freepik.com/vetores-premium/vector-bandeira-lgbt-bandeira-do-arco-iris-orgulho-lgbtq_616756-500.jpg?w=996' : (roomValue == 'Assexual' ? 'https://static.wixstatic.com/media/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png/v1/fill/w_640,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1024px-Transgender_Pride_flag.svg.png')}
            />
            <div className="mensagens">
                {arrayMessages.map((mensagem, index) => {
                    if (mensagem.username === usernameAtomValue) {
                        return <MensagemEnviada key={index} username={mensagem.username} mensagem={mensagem.message} />;
                    } else {
                        return <MensagemRecebida key={index} username={mensagem.username} mensagem={mensagem.message} />;
                    }
                })}
            </div>
            <MenuEnviarMensagem valor={mensagem} setValor={setMensagem} aoClicarArrow={() => { adicionarMensagemRecebida() }} />
        </div>
    );
}
