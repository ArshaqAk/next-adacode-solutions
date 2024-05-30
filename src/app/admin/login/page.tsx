"use client"
import { useRouter } from "next/navigation";
import { signIn } from "../../Helpers/firebaseAuth.js";
import { useState } from "react";
import { useAtom } from 'jotai';
import { userStateAtom } from '../../../../atom.ts';
import Cookies from 'js-cookie';

interface FirebaseUser {
  uid: string;
  email: string;
}

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userState, setUserState] = useAtom(userStateAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    signIn(formData.email, formData.password)
      .then((user: FirebaseUser | undefined) => {
        console.log(user);
        setUserState(true);
        Cookies.set('userState', 'true'); // Set the cookie
        console.log("User signed in:", user);
        router.push("/admin/studentlist");
      })
      .catch((error: { code: string; message: string }) => {
        console.error("Sign-in failed:", error);
        setUserState(false);

      });
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="login_container">
          <div className="login_form_wrapper">
            <label>Admin Login</label>
            <input
              placeholder="Enter Email Address"
              type="email"
              name="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="submit"
              className="button_light"
              value="submit"
              onClick={handleSignIn}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
