import './style.less';
import { useState } from 'react';

export function SelectCampo({ opt1 = '', opt2 = '', opt3 = '', opt4 = '', opt5 = '', opt6 = '', texto = '', valor, setValor }) {
  const [controle, setControle] = useState(true);
  const [controleTexto, setControleTexto] = useState(true);

  function controleOpt(event) {
      if (event.target.value === texto) {
          setControle(false);
      } else if (event.target.value === '') {
          setControle(true);
          setControleTexto(true);
      } else {
          setControleTexto(false);
          setValor(parseInt(event.target.value));
      }
  }

  return (
      <div className="SelectCampo">
          {controleTexto ? '' : <p>{texto}</p>}
          <select name="" id="" onClick={controleOpt}>
              {controle ? (
                  <option value={texto}>{texto}</option>
              ) : (
                  <option value=""></option>
              )}
              <option value="1">{opt1}</option>
              <option value="2">{opt2}</option>
              <option value="3">{opt3}</option>
              {opt4 === '' ? '' : <option value="4">{opt4}</option>}
              {opt5 === '' ? '' : <option value="5">{opt5}</option>}
              {opt6 === '' ? '' : <option value="6">{opt6}</option>}
          </select>
      </div>
  );
}
