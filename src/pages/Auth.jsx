import { useState } from "react";
import SignIn from "../components/SignIn";
import { useAuth } from "../hooks/useAuth";
// import SignUp from "../components/SignUp";

export default function Auth() {
  const { signIn } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleFormSubmit() {
    await signIn(formData);
  }

  return (
    <div className="container flex flex-col items-center gap-8 mx-auto xl:max-w-6xl grow">
      <SignIn data={formData} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
      {/*   <SignUp /> */}
    </div>
  );
}
