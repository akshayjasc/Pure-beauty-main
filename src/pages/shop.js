import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ShopCard from '../components/ShopCard';

// Images
import card1 from '../img/shop-img-1.jpg'

const ShopPage = () => {
  return (
    <Layout>
      <PageTitle title='Shop'/>
      <div className='container-fluid'>
      <div className='row'>
        <ShopCard bgimage={card1} />
        <ShopCard bgimage={card1} />
        <ShopCard bgimage={card1} />
        <ShopCard bgimage={card1} />
        <ShopCard bgimage={card1} />
        <ShopCard bgimage={card1} />
      </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
