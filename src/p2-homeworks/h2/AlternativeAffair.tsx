import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2"
import styles from "./AlternativeAffair.module.css";

type AlternativeAffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

const AlternativeAffair = (props: AlternativeAffairPropsType) => {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    // переменной classNameForPriority с помощью тернарного оператора присваивается ClassName в зависимости от приоритета задачи, который приходит из пропсов
    const classNameForPriority = props.affair.priority === 'low' ? styles.priorityLow : props.affair.priority === "middle" ? styles.priorityMiddle : styles.priorityHigh;

    return (
        <div className={styles.alternativeAffairItem}>
            <span>{props.affair.name}</span>
            <span className={classNameForPriority}>{` ${props.affair.priority}`}</span>
            <button className={styles.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    );
};

export default AlternativeAffair;