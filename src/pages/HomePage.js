import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../features/userSlice';
import { useNavigate } from 'react-router';

const HomePage = () => {
    const { users } = useSelector((store) => store.usersInfo);
    const nav = useNavigate();
    const dispatch = useDispatch();
    console.log(users)

    const [index, setIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = (i) => {
        setIndex(i);
        setOpen(!open)};

    return (
        <>
            <div className='grid grid-cols-3 p-5 gap-4'>
                {users && users.map((user, i) => {
                    return <div >
                        <h1>{user.username}</h1>
                        <h2>{user.email}</h2>
                        <h2>{user.gender}</h2>
                        <div className='flex justify-end space-x-10'>
                        {/* dispatch(removeUser(i)) */}
                            <button onClick={() => handleOpen(i)} className='text-red-700'><i className="fa-solid fa-trash" ></i></button>
                            <button onClick={() => nav(`/user/update/${user.id}`)} className='text-green-700'><i className="fa-solid fa-edit" ></i></button>
                        </div>
                    </div>
                })}
            </div>

            <div>
                
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Are You Sure ?.</DialogHeader>
                    <DialogBody divider>
                       You Want To Remove This User 
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={() => {dispatch(removeUser(index));
                        handleOpen();
                        }}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        </>

    )
}

export default HomePage
