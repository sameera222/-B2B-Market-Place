import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../features/productsSlice';
import { fetchProducts } from '../services/api';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts().then((res) => 
        dispatch(setProducts(res.data.products))
    );
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
