import {ButtonsContainer} from './ButtonsContainer';
import styles from '../styles/GameField.module.css';
import { useSelector } from 'react-redux';
import { selectArray } from '../selectors/select-array';


const GameFieldLayout=({click})=>{
const field=useSelector(selectArray);

    return(
        <div className={styles.gameContainer}>
            {field.map((button,index)=>
            <ButtonsContainer
                key={index} 
                value={button} 
                onClick={()=>click(index)}
                /> 
            )}
        </div> 
    )
}


export default GameFieldLayout