import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any++
    addUserCallback: (name: string) => void // need to fix any-++++++
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: Function) => {

    // !name ? setError('Ошибка! Введите имя') : addUserCallback(name)
    // setName('')

    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
        return
    }
    addUserCallback(name)
    setName('')

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку

    // !name ? setError('Ошибка! Введите имя') : console.log("all s gut")

    if (!name) {
        setError('Ошибка! Введите имя!')
    }
}

// export const pureOnEnter = (addUser: Function) => { // если нажата кнопка Enter - добавить
//     addUser()
// }

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)

    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = () => {
        addUser()
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.at(-1) === undefined ? '' : users.at(-1)!.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
