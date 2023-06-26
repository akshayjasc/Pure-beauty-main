import './style.css'

const PageTitle = ({title}) => {
  return (
    <div className='Page-title'>
      <div className='container'>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageTitle;
