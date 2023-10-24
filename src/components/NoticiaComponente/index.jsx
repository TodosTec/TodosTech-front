import './style.less'

export function NoticiaComponente({aoClicar}){
    return (
        <div className="NoticiaComponente" onClick={aoClicar}>
            <div className="colunaEsquerda">
                <span className="titulo">Cabelo curto</span>
                <span className="outro">Pansexual</span>
            </div>
            <span className="data">11.09.2023</span>
        </div>
    )
}