import './style.less';
import { useState } from 'react';

export function EditCampo({ tipo = '', texto = 'Nome', placeholder = texto, setValor, valor, requiredInput = false, minimoLetra = '0'}) {
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

  return (
    <div className="EditCampo">
      {placeholderEstado ? <p tabIndex={0}>{texto}</p> : null}
      <input
        tabIndex={0}
        type={tipo}
        placeholder={placeholderValor}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={(e) => {setValor(e.target.value)}}
        value={valor}
        required = {requiredInput ? true : false}
        minLength={minimoLetra}
      />
    </div>
  );
}
