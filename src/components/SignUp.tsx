import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignUpQuery } from "../services/query";
import Spinner from "./Spinner";
import CustomButton from "./CustomButton";

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
  password: yup
    .string()
    .required("Please enter your password.")
    .min(6, "Password shoud be at least 6 characters."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password"), ""], "Password do not match."),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password, confirmPassword } = data;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(useSignUpQuery({ email, password, confirmPassword }));
      }, 500);
    });
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
        <CustomButton disabled={isSubmitting} loading={isSubmitting}>
          Register
        </CustomButton>
        <div className='w-full flex flex-col sm:flex-row sm:gap-2'>
          <p>Already have an account?</p>
          <Link
            to='/login'
            className='text-blue-400 hover:text-blue-500 transition-all cursor-pointer'
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
