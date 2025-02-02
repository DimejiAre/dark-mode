import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import '../scss/Coins.scss';

function Coins () {

    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState('');

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(response => {
            setCoins(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    },[])

    function selectCoin() {
        const element = document.getElementById("coins-list");
        const coinValue = element.options[element.selectedIndex].value;
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinValue}`)
        .then(response => {
            setCoin(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='Coins-page'>
            <form>
                <fieldset>
                    <p>
                        <label>Select Coin: </label>
                        <select id='coins-list' onChange={selectCoin}>
                            {coins ? coins.map(coin => (
                                <option key={coin.id} value = {coin.id}>{coin.name}</option>
                            )): null }
                        </select>
                    </p>
                </fieldset>
            </form>
            {coin ? 
                <div className='Coins'>
                {coin ? <Coin coin={coin}/> : null}
                </div>
                : null
            }
            
        </div>
    )
}

export default Coins;