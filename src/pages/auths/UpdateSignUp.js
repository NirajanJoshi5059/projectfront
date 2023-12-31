import {
    Card,
    Input,
    Button,
    Typography,
    Radio
  } from "@material-tailwind/react";
  import React from 'react'
  import { gender } from "../../features/constants";
  import * as Yup from 'yup';
  import { useFormik } from "formik";
  import { useNavigate, useParams } from "react-router";
  import { useDispatch, useSelector } from "react-redux";
  import { addUser, updateUser } from "../../features/userSlice";
  import { nanoid } from "@reduxjs/toolkit";
  
  const UpdateSignUp = () => {
  
    const nav = useNavigate();
    const {id} = useParams();
    const { users } = useSelector((store) => store.usersInfo);
    const user = users.find((dat)=> dat.id === id);
    const dispatch = useDispatch();
  
    const userSchema = Yup.object().shape({
      username: Yup.string().required("Username must be filled"),
      email: Yup.string().required("Email must be filled"),
      password: Yup.string().min(6).max(25).required("Password must be filled"),
      gender: Yup.string().required("Select gender"),
      dob: Yup.string().required("Birthday must be filled"),
  
    });
  
    const formik = useFormik({
      initialValues: {
        username: user?.username,
        email: user?.email,
        password: user?.password,
        gender: user?.gender,
        dob: user?.dob,
        id : user?.id ,
      },
      onSubmit: (val) => {
        dispatch(updateUser(val));
        nav('/');
      },
      validationSchema: userSchema
    })
  
    return (
  
      <Card color="transparent" shadow={false} className="max-w-lg mx-auto mt-6">
        <Typography className="text-center" variant="h4" color="blue-gray">
          SIGN UP
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
                  label={gen.label} value={gen.value} name="gender" key={i}  
                  checked={formik.values.gender.includes(gen.value)? true :false}/>
                  
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
  
          <Button type="submit" className="bg-light-green-700 mt-6 content-center hover:bg-light-green-500" fullWidth>
            Update
          </Button>
          {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/user/login" className="font-semibold text-gray-900">
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>
  
    )
  }
  
  export default UpdateSignUp
  