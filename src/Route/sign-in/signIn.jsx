import { useState } from "react";
import FormInput from "../../component/formInput/formInput";
import "./sign.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../component/firebase/firebase";

const defaultField = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultField);
  const { userName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultField);
  };
  const handleSumit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { userName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("user email already in use");
      } else {
        console.log("error message", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Sign up with your email and password</h2>

      <form onSubmit={handleSumit}>
        <FormInput
          htmlFor="userName"
          label="User Name"
          id="userName"
          type="text"
          required
          onChange={handleChange}
          value={userName}
          name="userName"
        />

        <FormInput
          htmlFor="email"
          label="Email Address"
          id="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          htmlFor="password"
          label="Password"
          id="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          htmlFor="confirmPassword"
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
