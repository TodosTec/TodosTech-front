import './style.less'


export function ButtonBigBlue({text = "Continuar", classe = "", aoClicar, typeInput = ''}){
    return(
        <button className={"ButtonBigBlue " + classe} onClick={aoClicar} type={typeInput}>
            {text}
        </button>
    )
}