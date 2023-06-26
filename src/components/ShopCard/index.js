import './style.css'

const ShopCard = ({ bgimage }) => {
  const cardStyle = {
    backgroundImage: `url(${bgimage})`,
  };

  return (
    <div className='col-md-6 p-0 shop-card'>
      <div className='shop-card' style={cardStyle}>
        <p className='text-small'>MIST</p>
        <p className='heading'>Hydrating Mist</p>
        <p className='price'>$28</p>
      </div>
    </div>
  );
};

export default ShopCard;
