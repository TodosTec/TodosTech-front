import './style.less'

export function ButtonOutline({text = '', classe = '', aoClicar}){
    return(
        <button className={"ButtonOutline " + classe} onClick={aoClicar}>
            {text}
        </button>
    )
}