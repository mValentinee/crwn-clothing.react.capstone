import "./directory-item.styles.scss";

const DirectoryItems = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='directory-item-container'>
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
