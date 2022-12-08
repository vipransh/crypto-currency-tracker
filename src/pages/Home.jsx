import React from "react";
import homeStore from "../store/homeStore";
import { Link } from "react-router-dom";
import Header from "../components/Header";


function Home(){
      
     const store=homeStore()
     let coins=store.coins;
     
    
    // console.log(store);
    React.useEffect(() =>{
        if(store.trendingCoin.length===0 && store.searched===false)store.fetchCoins();
    },[])

    console.log("trending coins",store.coins);

    if(coins){
        return (
            <div>
            <Header/>
            <div className="flex flex-col items-center justify-center pt-8">
            <input className="border-2 border-neutral-400 pl-2 w-56 h-10" placeholder="Search..." type="text" value={store.query} onChange={store.setQuery}></input>
            <h1 className="text-bold text-xl  border-b-2 border-neutral-400 p-2 mb-4">{store.searched?"Search Result":"Trending Coins"}</h1>
                {
                    store.coins.map(coin=>{
                        return(
                            <div className="flex flex-row item-center justify-between w-96 mb-6 shadow-md p-4">
                            <img className="w-8" src={coin.image}></img>
                            <div key={coin.id}>
                                <Link to={`/${coin.id}`}>
                                    {coin.name}
                                </Link>
                            </div>
                            <div>{(!store.searched)?
                                <div className="flex flex-row items-center">
                                <img className="w-4 h-4 mr-2" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023"
                                    alt="btc-logo"/>
                                <h3>{(coin.pricBtc).toFixed(8)} BTC</h3>
                                </div>:""}
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        );
    }
    else
    {
        return(
            <div className="flex item-center justify-center mt-60">     
                <button disabled="" type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                <svg role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                </svg>
                Loading...
                </button>

            </div>

        );
    }
    
}

export default Home;

/* <div>
            {
                coins.map(coin=>{
                    return(
                        <div key={coin.id}>
                            <Link to={`/${coin.id}`}>
                                {coin.name}
                            </Link>
                        </div>
                    )
                })
            }
        </div> */