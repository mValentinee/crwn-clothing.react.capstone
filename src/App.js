import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication-in/authentication-in.component";
/////////////////////////

const Shop = () => {
  return <h1> i am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
