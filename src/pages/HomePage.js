import { Button } from 'bootstrap';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../features/userSlice';

const HomePage = () => {
    const { users } = useSelector((store) => store.usersInfo);
    const dispatch = useDispatch();
    console.log(users)
    return (
        <div className='grid grid-cols-3 p-5 gap-4'>
            {users && users.map((user, i) => {
                return <div >
                    <h1>{user.email}</h1>
                    <h2>{user.password}</h2>
                    <div className='flex justify-end space-x-10'>
                        <button onClick={()=> dispatch(removeUser(i))} className='text-red-700'><i className="fa-solid fa-trash" ></i></button>
                        <button className='text-green-700'><i className="fa-solid fa-edit" ></i></button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default HomePage
