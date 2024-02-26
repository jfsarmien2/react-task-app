import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignInQuery } from "../services/query";
import CustomButton from "./CustomButton";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
  password: yup.string().required("Please enter your password."),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;
    useSignInQuery({ email, password }, setLoading, reset);
  };

  return (
    <div className='w-full md:max-w-[450px]' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
        Login
      </h1>
      <form className='flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl'>
        <Input
          {...register("email")}
          type='text'
          placeholder='Enter your email'
          error={errors.email?.message}
        />

        <Input
          {...register("password")}
          type='password'
          placeholder='Enter your password'
          error={errors.password?.message}
        />
        <React.Fragment>
          <CustomButton disabled={loading} loading={loading}>
            Log In
          </CustomButton>
          <div className='w-full flex flex-col sm:flex-row sm:gap-2'>
            <p>Don't have an account?</p>
            <Link
              to='/register'
              className='text-blue-400 hover:text-blue-500 transition-all cursor-pointer'
            >
              Register
            </Link>
          </div>
        </React.Fragment>
      </form>
    </div>
  );
}

export default Login;
