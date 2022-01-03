import React from 'react'
import {AffairType, FilterType} from './HW2'
import AlternativeAffair from './AlternativeAffair'
import styles from './AlternativeAffairs.module.css'

type AlternativeAffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <AlternativeAffair
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

            <button className={`${styles.filterButton} ${styles.filterButtonAll}`} onClick={setAll}>All</button>
            <button className={`${styles.filterButton} ${styles.filterButtonHigh}`} onClick={setHigh}>High</button>
            <button className={`${styles.filterButton} ${styles.filterButtonMiddle}`} onClick={setMiddle}>Middle</button>
            <button className={`${styles.filterButton} ${styles.filterButtonLow}`} onClick={setLow}>Low</button>
        </div>
    )
}

export default AlternativeAffairs
