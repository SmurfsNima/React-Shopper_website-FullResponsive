import Collections from "../Collections.jsx/Collections";
import Hero from "../Hero/Hero";
import Offers from "../Offers/Offers";
import Newsletter from "../newsletter/Newsletter";
import Popular from "../popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <Collections/>
      <Newsletter />
      </div>
  );
};

export default Shop;
