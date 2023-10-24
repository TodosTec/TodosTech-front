import './style.less'
import {PencilOutline} from 'react-ionicons'
export function CircleFlutuamteButton({icon = <PencilOutline/>, aoClicar}){
    return(
        <button className="CircleFlutuamteButton" onClick={aoClicar}>
            {icon}
        </button>
    )
}