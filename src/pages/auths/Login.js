import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React from 'react'
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";

const Login = () => {
    
    const nav = useNavigate();
    const dispatch = useDispatch();

    const userSchema = Yup.object().shape({
        email: Yup.string().required("Email must be filled"),
        password: Yup.string().min(6).max(25).required("Password must be filled"),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (val) => {
            dispatch(addUser(val));
            nav('/')
        },
        validationSchema: userSchema
    })
    return (

        <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto mt-12">
            <Typography className="text-center" variant="h4" color="blue-gray">
                LOGIN
            </Typography>

            <form onSubmit={formik.handleSubmit} className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-4">
                    <Input
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                        size="lg" label="Email" />
                    {formik.errors.email && formik.touched.email && <h1 className="text-red-900">{formik.errors.email}</h1>}

                    <Input
                        onChange={formik.handleChange}
                        name="password"
                        value={formik.values.password}
                        type="password" size="lg" label="Password" />
                    {formik.errors.password && formik.touched.password && <h1 className="text-red-900">{formik.errors.password}</h1>}
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
