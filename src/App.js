import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(1);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }); // 네트워크에서 JSON 파일을 가져와서 coins에 저장.
  }, []);
  const handleCoinPrice = (event) => {
    setCoinPrice(event.target.value);
  };
  const handleMoneyInput = (event) => {
    setMoney(event.target.value);
  };
  return (
    <div>
      <h1>
        {loading ? "Loading..." : `We have ${coins.length} types of Coins`}
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleCoinPrice}>
          <option>Select a Coin!</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <h3>How much money do you have?</h3>
        <input type="number" value={money} onChange={handleMoneyInput} />$
      </div>
      <h3>You can have {money / coinPrice} coins</h3>
    </div>
  );
}

export default App;
