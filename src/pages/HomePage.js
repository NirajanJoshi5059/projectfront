import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const {users} = useSelector((store) => store.user);
    console.log(users)
    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default HomePage
