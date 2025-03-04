import React, { useEffect, useReducer } from "react";
import reducer from "../Reducer/Reducer";
import { deleteById, getAllData } from "../Service";
import { BASE_URL } from "../Service/Api";
import { useNavigate } from "react-router-dom";



const SortButtons = ({state,dispatch}) => {


const handleSortAz=()=>{
    let sortAZ=[...state.allDataSearch].sort((a,b)=>a.title.localeCompare(b.title))
    dispatch({
        type:"SortAz",
        allDataSearch:sortAZ
    })
}

const handleSortZa=()=>{
    let sortZA=[...state.allDataSearch].sort((a,b)=>b.title.localeCompare(a.title))
    dispatch({
        type:"SortZa",
        allDataSearch:sortZA
    })
}

const handleSortPriceLow = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    dispatch({
      type: "SortPriceLow",
      allDataSearch: sortedData
    });
  }
  
  const handleSortPriceHigh = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    dispatch({
      type: "SortPriceHigh",
      allDataSearch: sortedData
    });
  }

  const handleSortRaitingLow = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate));
    dispatch({
      type: "SortRaitingLow",
      allDataSearch: sortedData
    });
  }
  
  const handleSortRaitingHigh = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(a.rating.rate) - parseFloat(b.rating.rate));
    dispatch({
      type: "SortRaitingHigh",
      allDataSearch: sortedData
    });
  }
  const handleSortCountgLow = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(a.rating.count) - parseFloat(b.rating.count));
    dispatch({
      type: "SortCountLow",
      allDataSearch: sortedData
    });
  }
  
  const handleSortCountHigh = () => {
    const sortedData = [...state.allDataSearch].sort((a, b) => parseFloat(b.rating.count) - parseFloat(a.rating.count));
    dispatch({
      type: "SortCountHigh",
      allDataSearch: sortedData
    });
  }
  
  return (
   

          <tr>
            <th scope="col" className="px-6 py-3">
            <button onClick={()=>handleSortAz()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-5 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">A-Z</button> <button onClick={()=>handleSortZa()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Z-A</button>
            </th>
            <th scope="col" className="px-6 py-3">
            <button onClick={()=>handleSortPriceHigh()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Hig</button> <button onClick={()=>handleSortPriceLow()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Low</button>
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
            <button onClick={()=>handleSortRaitingHigh()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Hig</button> <button onClick={()=>handleSortRaitingLow()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Low</button>

            </th>
            <th scope="col" className="px-6 py-3">
            <button onClick={()=>handleSortCountHigh()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Hig</button> <button onClick={()=>handleSortCountgLow()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Low</button>

            </th>
          </tr>

  )
}

export default SortButtons