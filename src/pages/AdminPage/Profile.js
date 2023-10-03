import {
    Card,
    Input,
    Button,
    Typography,
    Radio, Select, Option, Checkbox
} from "@material-tailwind/react";
import React from 'react';
import * as Yup from 'yup';
import { checkData, countries, gender, } from '../../features/constants';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateUser } from "../../features/userSlice";


const Profile = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const userSchema = Yup.object().shape({
        username: Yup.string().required("Username must be filled"),
        email: Yup.string().required("Email must be filled"),
        password: Yup.string().min(6).max(25).required("Password must be filled"),
        gender: Yup.string().required("Select gender"),
        dob: Yup.string().required('Birthday must be filled'),
        country: Yup.string().required('Select country'),
        hobby: Yup.array().min(1).required("Choose hobby"),
        image: '',
        imageFile : Yup.mixed().test('invalid image', (val)=> {
            // console.log(val);
            return ['image/jpg', 'image/jpeg', 'image/png'].includes(val.type)
        }).required(),

    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            gender: '',
            dob: '',
            country: '',
            hobby: [],
            image: '',
            imageFile: null,
        },
        onSubmit: (val) => {
            dispatch(updateUser(val));
            nav(-1);
        },
        validationSchema: userSchema
    });


    return (
        <Card color="transparent" shadow={false} className="max-w-lg mx-auto mt-6">
            <Typography className="text-center" variant="h4" color="blue-gray">
                Profile
            </Typography>

            <form onSubmit={formik.handleSubmit} className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-4">
                    <Input
                        onChange={formik.handleChange}
                        name="username"
                        value={formik.values.username}
                        size="lg" label="User Name" />
                    {formik.errors.username && formik.touched.username && <h1 className="text-red-700">{formik.errors.username}</h1>}

                    <Input
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                        size="lg" label="Email" />
                    {formik.errors.email && formik.touched.email && <h1 className="text-red-700">{formik.errors.email}</h1>}

                    <Input
                        onChange={formik.handleChange}
                        name="password"
                        value={formik.values.password}
                        type="password" size="lg" label="Password" />
                    {formik.errors.password && formik.touched.password && <h1 className="text-red-700">{formik.errors.password}</h1>}
                </div>

                <div>
                    <Typography color="black" className="mt-1 font-normal">
                        Gender
                    </Typography>
                    <div className="flex gap-28">
                        {gender.map((gen, i) => {
                            return <Radio onChange={formik.handleChange} color={gen.color}
                                label={gen.label} value={gen.value} name="gender" key={i} />
                        })};
                    </div>
                    {formik.errors.gender && formik.touched.gender && <h1 className="text-red-700">{formik.errors.gender}</h1>}
                </div>

                <div>
                    <Typography color="black" className="mt-1 font-normal">
                        Birthday
                    </Typography>
                    <div className="mt-3">
                        <Input
                            onChange={formik.handleChange}
                            name="dob"
                            value={formik.values.dob}
                            type="date" size="lg" label="DOB" />
                    </div>
                    {formik.errors.dob && formik.touched.dob && <h1 className="text-red-700">{formik.errors.dob}</h1>}
                </div>

                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Country
                    </Typography>
                    <div className="mt-2">
                        {/* disabled={ formik.values.category == ''? true : false} */}
                        <Select name="country" label="Country" onChange={(e) => formik.setFieldValue('country', e)} >
                            {countries.map((country, i) => {
                                return <Option key={i} value={country.value}>{country.label}</Option>
                            })}
                        </Select>
                    </div>
                    {formik.errors.country && formik.touched.country && <h1 className="text-red-700">{formik.errors.country}</h1>}
                </div>

                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Hobbies
                    </Typography>
                    <div className="mt-2 flex gap-28">
                        {checkData.map((data, i) => {
                            return <Checkbox label={data.label} value={data.value}
                                color={data.color} key={i} name="hobby"
                                onChange={formik.handleChange} />
                        })}
                    </div>
                    {formik.errors.hobby && formik.touched.hobby && <h1 className="text-red-700">{formik.errors.hobby}</h1>}
                </div>


                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Image
                    </Typography>
                    <Input name="imageFile" type="file"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            formik.setFieldValue('imageFile',file);
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.addEventListener('load', (e) => {
                                formik.setFieldValue('image', e.target.result);
                            })
                        }} />
                    {formik.values.image && <img src={formik.values.image} alt="" />}
                    {formik.errors.imageFile && formik.touched.imageFile && <h1 className="text-red-700">{formik.errors.imageFile}</h1>}

                </div>


                <Button type="submit" className="bg-light-green-700 mt-4 content-center hover:bg-light-green-500" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="/user/login" className="font-semibold text-gray-900">
                        Update
                    </a>
                </Typography>
            </form>
        </Card>

    )
}

export default Profile
