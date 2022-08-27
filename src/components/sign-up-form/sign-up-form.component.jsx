import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilis/firebase/firebase-user.utilis";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
/////////////////////////////////////////////

// Default Empty Fields To Be Used As State
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // Generate Empty FormFields State
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Function To Be Used Aft Submit Is Processed
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Handler For Submitted Data Of Sign In with Email/Password
  const submitHandler = async (event) => {
    event.preventDefault();

    // Confirm Password Matches ConfirmedPassword
    if (confirmPassword !== password) {
      alert("Passwords Don't Match");
      return;
    }

    try {
      // Auth Submitted Data Of User
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Creating UserDoc From Auth Data
      await createUserDocumentFromAuth(user, { displayName });

      // Reset Fields After Submit
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot Create User, Email Already Exist");
      }
    }
  };

  // Handler That Inputs Data In Apporiate Fields
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have An Account?</h2>
      <span>Sign Up With Your Email & Password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={changeHandler}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={changeHandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={changeHandler}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={changeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
