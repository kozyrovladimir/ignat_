import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    }
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div>
            {mappedAffairs}

            {/*ниже закомментирована старая реализация кнопок, до использования SuperButton*/}

            {/*<button className={`${styles.filterButton} ${styles.filterButtonAll}`} onClick={setAll}>All</button>*/}
            {/*<button className={`${styles.filterButton} ${styles.filterButtonHigh}`} onClick={setHigh}>High</button>*/}
            {/*<button className={`${styles.filterButton} ${styles.filterButtonMiddle}`} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={`${styles.filterButton} ${styles.filterButtonLow}`} onClick={setLow}>Low</button>*/}

            {/*ниже реализация кнопок с использованием SuperButton*/}

            <SuperButton className={`${styles.filterButton} ${styles.filterButtonAll}`} onClick={setAll}>All</SuperButton>
            <SuperButton className={`${styles.filterButton} ${styles.filterButtonHigh}`} onClick={setHigh}>High</SuperButton>
            <SuperButton className={`${styles.filterButton} ${styles.filterButtonMiddle}`} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={`${styles.filterButton} ${styles.filterButtonLow}`} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
