import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Full Name" name="text" type="text" placeholder="Insert your name here..." />
      <InputForm label="Email" name="email" type="email" placeholder="Email@gmail.com" />
      <InputForm label="Password" name="password" type="password" placeholder="Password"></InputForm>
      <InputForm label="Confirm Password" name="confrimpassword" type="password" placeholder="Password"></InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
