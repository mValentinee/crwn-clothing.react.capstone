import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithExistingEmail,
} from "../../utilis/firebase/firebase.utilis";
import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
/////////////////////////////

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // Generate Empty FormFields State
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Log In User with Google Mechanics
  const signInWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
  };

  // reset aft Submit Is Processed
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // change Handler
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // Log In User Handler
  const signInWithEmailPasswordHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithExistingEmail(email, password);
      console.log(user);

      resetFormFields();
    } catch (err) {
      err.code === "auth/wrong-password"
        ? alert("incorrect password")
        : err.code === "auth/user-not-found"
        ? alert("user not found")
        : console.error(err);
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={signInWithEmailPasswordHandler}>
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
        <div className='button-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={signInWithGoogleHandler}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
