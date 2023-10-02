import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import React from 'react'
import { useNavigate } from "react-router";

const Login = () => {
    const nav = useNavigate();
    return (

        <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto mt-12">
            <Typography className="text-center" variant="h4" color="blue-gray">
                LOGIN
            </Typography>

            <form className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                </div>

                <Button type="submit" className="mt-6 bg-blue-gray-800 hover:bg-blue-gray-700 " fullWidth>
                    Login
                </Button>
                <Button onClick={() => nav('/user/register')}
                    className=" bg-light-green-700 mt-6 content-center hover:bg-light-green-500 " fullWidth >
                    Create New Account
                </Button>
            </form>
        </Card>
    )
}

export default Login
