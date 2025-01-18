import BestSeller from "../Components/BestSeller";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import NewsLetterBox from "../Components/NewsLetterBox";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
    </div>
  );
};

export default Home;
