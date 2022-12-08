import axios from 'axios';
import create from 'zustand'

const showStore = create((set) => ({

    graphData: [],

    data: [],

    resetData: ()=>{
        set({graphData: [], data: []})
    },

    fetchData:async (id)=>{

        const [graphRes,dataRes]=await Promise.all([
             axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=120`),
            axios.get(
                `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
            )    
        ])

       
        // console.log("dataRes=",dataRes);
        const graphData=graphRes.data.prices?.map((price) =>{
            const [timestamp,p]=price;
            const date=new Date(timestamp).toLocaleDateString("en-us");
            const pr=Math.floor(p);
            return{
                
                    date: date,
                    PriceInr: pr
                }
        })
        set({graphData: graphData, data: dataRes});
        // console.log("graphdta=",graphData);
    },
}))

export default showStore;