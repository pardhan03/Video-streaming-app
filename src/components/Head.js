import React, { useEffect, useState } from 'react'
import logo from './image/logo.png'
import ham from './image/Hamburger_icon.svg.png'
import usericon from './image/user-icon.webp'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/Appslice'
import { SEARCH_API } from './utils/constant'
import { cacheResults } from './utils/SearchSlice'

const Head = () => {

  const[SearchQuery,setSearchQuery]=useState("");

  const[suggestion,setSuggestions]=useState([]);

  const[showSuggestion, setShowSuggestion]=useState(false);

  const searchCache=useSelector((store)=>store.search);

  useEffect(()=>{
    const timer=setTimeout(() => {
      if(searchCache[setSearchQuery])
      {
        setSuggestions(searchCache[setSearchQuery])
      }
      else{
      getSearchSuggestions()
      }
    }, 200);

    return()=>{
      clearTimeout(timer);
    }
  },[SearchQuery]);

  const getSearchSuggestions=async () =>{
    console.log(SearchQuery);
    const data=await fetch(SEARCH_API+SearchQuery);
    const json=await data.json();
    //console.log(json)
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [SearchQuery]:json[1]
    })
    );
  };
 
  const dispatch=useDispatch();

  const toggleMenuHandler= () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8 mx-2 cursor-pointer' 
            onClick={()=>toggleMenuHandler()}
            src={ham} alt="H"/>
            <img className="h-8" src={logo} alt="Y"/>
        </div>
        <div className="col-span-10">
          <div>
            <input 
              className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
              type="text"
              value={SearchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestion(true)}
              onBlur={()=>setShowSuggestion(false)}
            />                                                                  
            <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
          </div>
          {showSuggestion && <div className="relative bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            <ul>
              {
                suggestion.map((s)=>(
                  <li key={s} className="py-2 shadow-sm">💡 {s}</li>
                ))
              }
            </ul>
          </div>}
        </div>
        <div className="col-span-1">
            <img className="h-8" src={usericon} alt="user"/>
        </div>
    </div>
  )
}

export default Head;