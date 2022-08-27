import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication-in/authentication-in.component";
import Shop from "./routes/shop/shop.component";
import CheckOutPage from "./routes/checkout/checkout.component";
/////////////////////////

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
