import { useState } from 'react'
import './style.less'

export function TextCaseCadastro({text = 'Email em uso', classe = '', estado = true}){
    return (
        <p className={estado ? `TextCaseCadastro sumir ${classe}` : `TextCaseCadastro ${classe}`}>{text}</p>
    )
}