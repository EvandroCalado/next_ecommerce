import { CardGrid } from '../components';

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const Home = async () => {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CardGrid products={products} />
    </div>
  );
};

export default Home;
