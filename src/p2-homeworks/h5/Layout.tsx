import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './HW5.module.css'

type LayoutProps = {
    PRE_JUNIOR: string,
    JUNIOR: string,
    UPPER_JUNIOR: string
}

// В компоненте Layout прописаны ссылки, кликая на которые у нас будут отрисовываться нужные компоненты вместо Outset;

function Layout(props: LayoutProps) {
    return (
        <div>
            <div className={styles.wrapperMenu}>
                <div className={styles.menu}>
                    <Link to={"/"}>Pre Junior</Link>
                    <Link to={"/junior"}>Junior</Link>
                    <Link to={"/upper-junior"}>Upper Junior</Link>
                </div>
                <div className={styles.iconMenu}>&#x25BA;&#x25BA;&#x25BA;</div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout
