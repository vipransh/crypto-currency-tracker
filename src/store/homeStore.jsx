import axios from 'axios';
import create from 'zustand'
import debounce from '../debouncehelper/debounce';

// const debounce=debounce();

const homeStore = create((set) => ({

    conis:[],

    trendingCoin: [],

    query: '',

    searched: false,

    setQuery: (e) =>{
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    
    searchCoins: debounce( async() =>{
        const {query, trendingCoin}=homeStore.getState()
        if(query.length>3){
        const res=await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
        console.log("search data",res);
        const coins=res.data.coins.map(coin=>{
            return{
                name: coin.name,
                image: coin.large,
                id: coin.id,
                pricBtc: 0
            }
        })
        set({coins,searched: true});
    } else{
        set({coins: trendingCoin, searched: false});
    }
    },500),

    fetchCoins:async () =>{
        const res=await axios.get("https://api.coingecko.com/api/v3/search/trending");

        const coins=res.data.coins.map(coin =>{
            return{
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                pricBtc: coin.item.price_btc
            }
        })
        set({coins,trendingCoin: coins});
        
        
    }
   

    
   
  
}))

export default homeStore;