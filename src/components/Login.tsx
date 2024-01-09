import Input from "./Input";

function Login() {
  return (
    <div className='w-full md:max-w-[450px]'>
      <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>
        Login
      </h1>
      <div className='flex flex-col gap-3 bg-white p-6 min-h-[150px] rounded-xl'>
        <Input name='Email' type='email' />
        <Input name='Password' type='password' />
        <Input name='Confirm password' type='password' />
      </div>
    </div>
  );
}

export default Login;
