import React from 'react';

function Coin(props){
    const {coin} = props;
    return (
        <div>
            <h2>{coin.name}</h2>
            <img src={coin.image.thumb} alt={coin.name}/>
            <p>{'Symbol: ' + coin.symbol}</p>
            <p>{'Description: ' + coin.description? coin.description.en: null}</p>
            <p>{'Current Price: ' + coin.market_data.current_price.usd}</p>

        </div>
    )
}

export default Coin;