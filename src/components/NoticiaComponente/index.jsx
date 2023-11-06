import './style.less'

export function NoticiaComponente({aoClicar, titulo, autor, data}){
    return (
        <div className="NoticiaComponente" onClick={aoClicar}>
            <div className="colunaEsquerda">
                <span className="titulo">{titulo}</span>
                <span className="outro">{autor}</span>
            </div>
            <span className="data">{data}</span>
        </div>
    )
}