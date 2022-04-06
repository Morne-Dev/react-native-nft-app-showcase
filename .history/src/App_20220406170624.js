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
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description=" Experiencer a buttery UI of 
        Cryptrack NFT Marketplace. Smooth constant colors of a fluent UI design."
         BuymockupImg={assets.homeCards}
         reverse
      />
    </>
  );
}

export default App;
