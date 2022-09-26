import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux-store/user/user.action";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utilis/firebase/firebase-user.utilis";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication-in/authentication-in.component";
import Shop from "./routes/shop/shop.component";
import CheckOutPage from "./routes/checkout/checkout.component";

/////////////////////////////////////////

const App = () => {
  const dispatch = useDispatch();

  // Initialize USER on Mount Of App
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
