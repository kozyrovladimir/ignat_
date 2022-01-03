import React from 'react'
import {AffairType} from './HW2'
import styles from './Affair.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    return (
        <div className={styles.affairItem}>
            <span>{props.affair.name} </span>

            {/*старая реализация кнопки удаления записи*/}
            {/*<button className={styles.deleteButton} onClick={deleteCallback}>X</button>*/}

            {/*новая реализация кнопки удаления при помощи SuperButton*/}
            <SuperButton red={true} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair