import {
    Card,
    Input,
    Button,
    Typography,
    Radio, Select, Option, Checkbox
} from "@material-tailwind/react";
import React from 'react'
import { checkData, countries, gender, } from '../../features/constants'
import { useFormik } from "formik";


const Profile = () => {
    const genders = gender;

    const formik = useFormik({
        initialValues: {
            username: " ",
            email: " ",
            password: " ",
            gender: " ",
            dob: " ",
            country: " ",
            hobby: [],
            image: " ",
        },

        onSubmit: (val) => {
            console.log(val)
        },

    });

    return (
        <Card color="transparent" shadow={false} className="max-w-lg mx-auto mt-6">
            <Typography className="text-center" variant="h4" color="blue-gray">
                Profile
            </Typography>

            <form onSubmit={formik.handleSubmit} className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        onChange={formik.handleChange}
                        name="username"
                        value={formik.values.username}
                        size="lg" label="User Name" />

                    <Input
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email} size="lg" label="Email" />

                    <Input
                        onChange={formik.handleChange}
                        name="password"
                        value={formik.values.password} type="password" size="lg" label="Password" />
                </div>

                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Gender
                    </Typography>
                    <div className="flex gap-28 mt-2">
                        {genders.map((gen, i) => {
                            return <Radio color={gen.color} label={gen.label}
                                onChange={formik.handleChange} value={gen.value} name="gender" key={i} />
                        })};
                    </div>
                </div>

                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Birthday
                    </Typography>
                    <div className="mt-2">
                        <Input
                            onChange={formik.handleChange}
                            name="dob"
                            value={formik.values.dob} type="date" size="lg" label="DOB" />
                    </div>
                </div>

                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Country
                    </Typography>
                    <div className="mt-2">
                        {/* disabled={ formik.values.category == ''? true : false} */}
                        <Select name="country" label="Country" onChange={(e)=> formik.setFieldValue('country', e)} >
                            {countries.map((country, i) => {
                                return <Option key={i} value={country.value}>{country.label}</Option>
                            })}
                        </Select>
                    </div>
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
                </div>


                <div>
                    <Typography color="black" className="mt-3 font-normal">
                        Image
                    </Typography>
                    <Input name="image" type="file" 
                    onChange={ (e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.addEventListener('load', (e)=> {
                           formik.setFieldValue('image',e.target.result);
                        })
                    }} />
                   {formik.values.image && <img src={formik.values.image} alt=""/>}
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
