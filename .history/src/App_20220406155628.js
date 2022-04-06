import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs.
        Start Selling & Growing"
        description="Buy, store, collectNFT's, exchange & earn crypto join 2+
         million people using Crypttrack Marketplace."

         showBtn
         BuymockupImg={assets.homeHero}
         banner="banner"
      />
    </>
  );
}

export default App;
