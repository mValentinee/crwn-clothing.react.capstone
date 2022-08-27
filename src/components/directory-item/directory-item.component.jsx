import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";
/////////////////////////

const DirectoryItems = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavHandler = () => navigate(route);

  return (
    <div className='directory-item-container' onClick={onNavHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default DirectoryItems;
