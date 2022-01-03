import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.FormEvent<HTMLInputElement>) => void
    addUser: (e: React.MouseEvent<HTMLButtonElement>) => void
        error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    let inputClass;
    {error ? inputClass = s.error : inputClass = s.someClass}

    return (
        <div>
            {/*old realisation of text input*/}
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}

            {/*realisation with SuperInputText*/}
            <SuperInputText value={name} onChange={setNameCallback} error={error}></SuperInputText>

            {/*old realisation of button*/}
            {/*<button onClick={addUser}>add</button>*/}

            {/*realisation with SuperButton*/}
            <SuperButton onClick={addUser}>add</SuperButton>

            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
