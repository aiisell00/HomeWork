import React, { useContext, useEffect, useReducer } from "react";
import { deleteById, getAllData } from "../../Service";
import { BASE_URL } from "../../Service/Api";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";



const SortButtons = () => {
  const {allData, SetAllData, allDataSearch, SetallDataSearch}=useContext(ProductContext)


  const handleSortAz = () => {
    let sortAZ = [...allDataSearch].sort((a, b) => a.title.localeCompare(b.title))
    SetallDataSearch(sortAZ)
  }

  const handleSortZa = () => {
    let sortZA = [...allDataSearch].sort((a, b) => b.title.localeCompare(a.title))
    SetallDataSearch(sortZA)
  }

  const handleSortPriceLow = () => {
    const sortedData = [...allDataSearch].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    SetallDataSearch(sortedData)
  }

  const handleSortPriceHigh = () => {
    const sortedData = [...allDataSearch].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    SetallDataSearch(sortedData)
  }

  const handleSortRaitingLow = () => {
    const sortedData = [...allDataSearch].sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate));
    SetallDataSearch(sortedData)
  }

  const handleSortRaitingHigh = () => {
    const sortedData =[...allDataSearch].sort((a, b) => parseFloat(a.rating.rate) - parseFloat(b.rating.rate));
    SetallDataSearch(sortedData)
  }
  const handleSortCountgLow = () => {
    const sortedData = [...allDataSearch].sort((a, b) => parseFloat(a.rating.count) - parseFloat(b.rating.count));
    SetallDataSearch(sortedData)
  }

  const handleSortCountHigh = () => {
    const sortedData = [...allDataSearch].sort((a, b) => parseFloat(b.rating.count) - parseFloat(a.rating.count));
    SetallDataSearch(sortedData)
  }

  return (


    <tr className="">
      <th scope="col" className="px-2 py-3">
        <button onClick={() => handleSortAz()} className="py-2 px-2  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">A-Z</button> <button onClick={() => handleSortZa()} className="py-2 px-2  me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Z-A</button>
      </th>
      <th scope="col" className="px-12 py-3">
        <button onClick={() => handleSortPriceHigh()} className="py-2 px-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Hig</button> <button onClick={() => handleSortPriceLow()} className="py-2 px-2  me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Low</button>
      </th>
      <th scope="col" className="px-6 py-3">

      </th>
      <th scope="col" className="px-6 py-3">

      </th>
      <th scope="col" className="px-6 py-3">

      </th>
      <th scope="col" className="px-6 py-3">

      </th>
      <th scope="col" className="px-6 py-3">

      </th>
      <th scope="col" className="px-6 py-3">

      </th>

      <th scope="col" className="px-12 py-3">
        <button onClick={() => handleSortRaitingHigh()} className="py-2 px-2   mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-7000">Hig</button> <button onClick={() => handleSortRaitingLow()} className="py-2 px-2  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Low</button>

      </th>
      <th scope="col" className=" py-3">
        <button onClick={() => handleSortCountHigh()} className="py-2 px-2  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Hig</button> <button onClick={() => handleSortCountgLow()} className="py-2 px-2   mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Low</button>

      </th>
    </tr>

  )
}

export default SortButtons