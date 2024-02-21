export const useSignUpQuery = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;
  if (email && password) {
    if (password === confirmPassword) {
      console.log(email, password);
    }
  } else {
    console.log("Fields should not be left empty.");
  }
};
