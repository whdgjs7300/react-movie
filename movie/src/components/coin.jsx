import { useState, useEffect } from "react";

const Coin = () => {
     // useEffect 연습
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
        fetch("http://api.coinpaprika.com/v1/tickers").then(response => response.json())
        .then(json => setCoins(json))
        setLoading(false);
    }, [])

    return (  
        <div>
        <h1>the Coins! {loading ? "" : `(${coins.length})`}</h1>

        {loading ? <strong>Loading...</strong> : (
        <select>
        {
            coins.map((coin)=>{
            return <option key={coin}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</option>
            })
        }
        </select>
        )}
        </div>
    );
}

export default Coin;