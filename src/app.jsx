import Home from "./Home";
import Helmet from "react-helmet";

export function App() {
  return (
    <>
      <Helmet>
        <title>Floki Dragon</title>
        <meta
          name="description"
          content="Floki Dragon is the next moonshot memecoin on Binance Smart Chain."
        />
        <meta
          name="keywords"
          content="Floki Dragon, Floki, Dragon, FlokiDragon, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon BSC, Floki Dragon Binance Smart Chain, Floki Dragon BSC Token, Floki Dragon BSC Coin, Floki Dragon BSC Crypto, Floki Dragon BSC Cryptocurrency, Floki Dragon BSC Token, Floki Dragon BSC Coin, Floki Dragon BSC Crypto, Floki Dragon BSC Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency, Floki Dragon Token, Floki Dragon Coin, Floki Dragon Crypto, Floki Dragon Cryptocurrency"
        />
        <meta name="author" content="3stud.io" />
        <meta property="og:title" content="Floki Dragon" />
        <meta
          property="og:description"
          content="Floki Dragon is the next moonshot memecoin on Binance Smart Chain."
        />
        <meta property="og:url" content="https://flokidragon.com" />
        <meta
          property="og:image"
          content="https://flokidragon.com/assets/flokidragon.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Floki Dragon" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@3studio" />
      </Helmet>

      <Home />
    </>
  );
}
