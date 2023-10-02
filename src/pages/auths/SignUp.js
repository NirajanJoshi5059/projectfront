import {
  Card,
  Input,
  Button,
  Typography,
  Radio
} from "@material-tailwind/react";
import React from 'react'
import { gender } from "../../features/constants";

const SignUp = () => {
 
  return (

    <Card color="transparent" shadow={false} className="max-w-lg mx-auto mt-6">
      <Typography className="text-center" variant="h4" color="blue-gray">
        SIGN UP
      </Typography>

      <form className="mt-8 mb-2">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="User Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>

        <div>
          <Typography color="black" className="mt-1 font-normal">
            Gender
          </Typography>
          <div className="flex gap-28">
            {gender.map((gen, i)=> {
              return <Radio color={gen.color} label={gen.label} value={gen.value} name="gender" key={i}/>
            })};
          </div>
        </div>

        <div>
          <Typography color="black" className="mt-1 font-normal">
            Birthday
          </Typography>
          <div className="mt-3">
            <Input type="date" size="lg" label="DOB" />
          </div>
        </div>

        <Button type="submit" className="bg-light-green-700 mt-6 content-center hover:bg-light-green-500" fullWidth>
          Register
        </Button>
        <Typography color="gary" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/user/login" className="font-semibold text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>

  )
}

export default SignUp
