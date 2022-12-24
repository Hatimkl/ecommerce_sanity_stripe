import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img className="img-slider" src="/1.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/2.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/3.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/4.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/5.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/6.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/7.svg" alt="" width={150} />
        </div>
        {/* same slides doubled */}
        <div className="slide">
          <img className="img-slider" src="/1.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/2.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/3.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/4.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/5.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/6.svg" alt="" width={150} />
        </div>
        <div className="slide">
          <img className="img-slider" src="/7.svg" alt="" width={150} />
        </div>
      </div>
    </div>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
