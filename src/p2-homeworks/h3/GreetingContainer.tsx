import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: React.FormEvent<HTMLInputElement>) => {
        setError('');
        setName(e.currentTarget.value);
    }
    const addUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        const formattedValue = name.trim();
        if (formattedValue) {
            addUserCallback(formattedValue);
            alert(`Hello ${name} !`);
            setName('');
        } else {
            setError('Incorrect value!');
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
