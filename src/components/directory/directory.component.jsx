import "./directory.styles.scss";
import DirectoryItems from "../directory-item/directory-item.component";
///////////////////////////

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
