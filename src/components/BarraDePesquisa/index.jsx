import './style.less'
import {Search} from 'react-ionicons'
export function BarraDePesquisa(){
    return (
        <div className='BarraDePesquisa'>
            <input placeholder='Pesquisar'/>
            <Search
                        cssClasses={'Search'}
                        color={'#979797'}
                        height="25px"
                        width="25px"
                        />
        </div>
    )
}