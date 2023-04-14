import CountdownTimer from '../components/CountdownTimer';
import { ProductsList } from '../components/ProductsList';

const Home = () => {
  return (
    <>
      <ProductsList />
      <CountdownTimer targetDate={new Date('April 20, 2023 23:59:00')} />
    </>
  );
};

export default Home;
