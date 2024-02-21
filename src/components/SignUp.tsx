import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Please enter your email."),
  password: yup.string().required("Please enter your password."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password"), ""], "Password do not match."),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className='w-full md:max-w-[450px]'>
      <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
        Register
      </h1>
      <form
        className='flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl'
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <Input
          {...register("confirmPassword")}
          type='password'
          placeholder='Confirm Password'
          error={errors.confirmPassword?.message}
        />

        <React.Fragment>
          <Button text='Register' type='submit' secondary />
          <div className='w-full flex flex-col sm:flex-row sm:gap-2'>
            <p>Already have an account?</p>
            <Link
              to='/login'
              className='text-blue-400 hover:text-blue-500 transition-all cursor-pointer'
            >
              Login
            </Link>
          </div>
        </React.Fragment>
      </form>
    </div>
  );
}

export default SignUp;
