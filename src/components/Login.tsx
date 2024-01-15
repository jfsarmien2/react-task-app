import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Login() {
  const [login, setLogIn] = useState(true);
  return (
    <div className='w-full md:max-w-[450px]'>
      <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
        {login ? "Login" : "Register"}
      </h1>
      <div className='flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl'>
        <Input name='Email' type='email' />
        <Input name='Password' type='password' />
        {!login && <Input name='Confirm password' type='password' />}
        {login ? (
          <>
            <Button text='Login' loading />
            <Button onClick={() => setLogIn(false)} secondary text='Register' />
          </>
        ) : (
          <>
            <Button text='Register' loading />
            <Button onClick={() => setLogIn(true)} secondary text='Login' />
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
