import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import HomeCatalog from "../../home-catalog-data";
///////////////////////////

const Home = () => {
  const categories = HomeCatalog;

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
