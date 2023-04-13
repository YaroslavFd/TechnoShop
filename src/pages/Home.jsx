import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const targetDate = new Date('April 20, 2023 23:59:00');
  return (
    <>
      <ProductCard />
      <CountdownTimer targetDate={targetDate} />
    </>
  );
};

export default Home;
