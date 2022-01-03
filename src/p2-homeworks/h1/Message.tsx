import React from 'react'
import styles from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={styles.message}>
            <div className={styles.messageImg}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={styles.textContent}>
                <div className={styles.textMainContent}>
                    <span className={styles.textUserName}>{props.name}</span><br/>
                    <span>{props.message}</span>
                    <div className={styles.rectangle}></div>
                    <div className={styles.triangle}>
                    </div>
                </div>
                <div className={styles.messageTime}>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
