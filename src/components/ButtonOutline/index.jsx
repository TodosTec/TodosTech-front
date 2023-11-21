import './style.less'

export function ButtonOutline({text = '', classe = '', aoClicar, style}){
    return(
        <button className={"ButtonOutline " + classe} onClick={aoClicar} style={style}>
            {text}
        </button>
    )
}