import './style.less'

export function InputDefault({typeInput = 'text', placeholderInput = "", classe = "", valor, setValor}){
    return (
        <input 
        type={typeInput}
        placeholder={placeholderInput}
        className={"InputDefault " + classe}
        onChange={(e) => {setValor(e.target.value)}}
        value={valor}
        />
    )
}