import SignUp from "../components/SignUp";

const RegisterPage = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center p-10'>
      <SignUp />
      <div className='h-full w-full bg-gradient-to-r from-customBlue to-customPink opacity-70 absolute top-0 -z-10' />
      <div className='h-full w-full absolute bg-pattern -z-20 top-0' />
    </div>
  );
};

export default RegisterPage;
