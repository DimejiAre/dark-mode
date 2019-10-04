import React from 'react';

function Coin(props){
    const {coin} = props;
    return (
        <div className='Coin'>
            <div>
                <img src={coin.image.large} alt={coin.name}/>
                <h2>{coin.name}</h2>
            </div>
            <p>{'Symbol: ' + coin.symbol}</p>
            <p>{'Description: ' + coin.description.en}</p>
            <p>{'Current Price(USD): ' + coin.market_data.current_price.usd}</p>

        </div>
    )
}

export default Coin;