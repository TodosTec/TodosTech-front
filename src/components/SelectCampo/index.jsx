import './style.less'
import { useState } from 'react';

export function SelectCampo({ tipo = '', texto = 'Nome', placeholder = texto, setValor, valor, requiredInput = false}){
    const [placeholderEstado, setPlaceholderEstado] = useState(false);
    const [placeholderValor, setPlaceholderValor] = useState(placeholder);
    const handleInputFocus = () => {
      setPlaceholderEstado(true);
      setPlaceholderValor('');
    };
    
    const handleInputBlur = () => {
      
      if (valor === '') {
          console.log('entrou')
          setPlaceholderValor(texto);
          setPlaceholderEstado(false);
      } else{
          setPlaceholderEstado(true);
      }
    };
    return(
        <div className="SelectCampo">
            {placeholderEstado ? <p tabIndex={0}>{texto}</p> : null}
            <select name="" id="">
                <option value=""></option>
                <option value="">opt 1</option>
                <option value="">opt 2</option>
                <option value="">opt 3</option>
            </select>
        </div>
    )
}





// export function EditCampo({ tipo = '', texto = 'Nome', placeholder = texto, setValor, valor, requiredInput = false}) {

//   return (
//     <div className="EditCampo">
//       <input
//         tabIndex={0}
//         type={tipo}
//         placeholder={placeholderValor}
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         onChange={(e) => {setValor(e.target.value)}}
//         value={valor}
//         required = {requiredInput ? true : false}
//       />
//     </div>
//   );
// }
