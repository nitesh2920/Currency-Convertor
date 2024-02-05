import { useEffect, useState } from "react";


const UseCurrencyInfo=(currency)=>{
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())//yha par data string sa json mai convert ho rha hai.
        .then((res)=>setData(res[currency]))// yha uss json ko setdata sa data mai store kr rha hai.
        //idhar humlog res.currency bhi leehk skta hai ya square bracket use krka uska data layega.
       
    },[currency])
    console.log(data, " currency")
    return data
}

export default UseCurrencyInfo