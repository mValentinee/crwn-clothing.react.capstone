import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utilis/firebase/firebase.utilis";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
/////////////////////////////

const SignIn = () => {
  try {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
      <div>
        <h1>sign in page</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        <SignUpForm />
      </div>
    );
  } catch (err) {
    throw err;
  }
};

export default SignIn;
