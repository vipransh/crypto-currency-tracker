import React from "react";
import '../App.css'
import showStore from "../store/showStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import Header from "../components/Header";



 function Show() {
  const store = showStore();
  const params = useParams();
  let graphData=store.graphData;
  let dataRes=store.data;

  React.useEffect(() => {
    // console.log(params);
       store.fetchData(params.id);
       store.resetData();
  },[]);

  // console.log("store data",store.data);

  if(graphData && dataRes.data)
 {
  return (
    <div>
    <Header/>
    <header className="flex  item-center justify-center mt-4 mb-4 ">
      <div className="flex flex-col items-center">
      <img className="w-20 mb-2 " src={dataRes.data.image.large} alt="coin-logo"/>
      <h2 className="text-black text-3xl ml-4 text-center">
        {dataRes.data.name} ({dataRes.data.symbol})
      </h2>
      </div>
    </header>
    <div className="flex items-center justify-center  ">
      <AreaChart
        width={800}
        height={350}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="PriceInr" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </div>
      <div className="flex item-center justify-center mt-4">
      <div className="flex flex-col item-center  justify-center">
      <h1 className="text-bold text-2xl border-b border-black-400 mb-4 text-center p-2">Details</h1>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h3 className="text-bold text-xl">Market Cap Rank</h3>
        <span>{dataRes.data.market_cap_rank}</span>
      </div>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h4 className="text-bold text-xl">24h High</h4>
        <span>₹{dataRes.data.market_data.high_24h.inr}</span>
      </div>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h4 className="text-bold text-xl">24h Low</h4>
        <span>₹{dataRes.data.market_data.low_24h.inr}</span>
      </div>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h4 className="text-bold text-xl">Circulating Supply</h4>
        <span>${(dataRes.data.market_data.circulating_supply).toFixed(2)}</span>
      </div>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h4 className="text-bold text-xl">Current Price</h4>
        <span>₹{dataRes.data.market_data.current_price.inr}</span>
      </div>
      <div className="w-96 flex flex-row item-center justify-between p-2 border-b border-black-600 mb-4">
        <h4 className="text-bold text-xl">1 Year Change</h4>
        <span>{dataRes.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
      </div>
      </div>
      </div>
    </div>
  );}
  else{
    return (
      <div className="flex item-center justify-center mt-60">     
                <button disabled="" type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                </svg>
                Loading...
                </button>

            </div>
    );
  }
}

export default Show;
