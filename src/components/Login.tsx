import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Login() {
  const [login, setLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    const data = { email, password, confirmPassword };
    console.log(data);
  };
  const handleSignIn = () => {
    const data = { email, password };
    console.log(data);
  };
  return (
    <div className='w-full md:max-w-[450px]'>
      <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
        {login ? "Login" : "Register"}
      </h1>
      <div className='flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl'>
        <Input
          name='Email'
          type='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          name='Password'
          type='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {!login && (
          <Input
            name='Confirm password'
            type='password'
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        )}
        {login ? (
          <React.Fragment>
            <Button text='Login' onClick={handleSignIn} />
            <div className='w-full flex flex-col sm:flex-row sm:gap-2'>
              <p>Don't have an account?</p>
              <p
                onClick={() => setLogIn(false)}
                className='text-blue-400 hover:text-blue-500 transition-all cursor-pointer'
              >
                Register
              </p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button text='Register' secondary onClick={handleSignUp} />
            <div className='w-full flex flex-col sm:flex-row sm:gap-2'>
              <p>Already have an account?</p>
              <p
                onClick={() => setLogIn(true)}
                className='text-blue-400 hover:text-blue-500 transition-all cursor-pointer'
              >
                Login
              </p>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Login;
