import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName } from './utils/helper';
import { makeRandomMessage } from './utils/helper';

const LiveChat = () => {

    const dispatch=useDispatch();
    
    const chatMessages=useSelector(store=>store.chat.message);

    const[livemessage,setlivemessge]=useState("");

    useEffect(()=>{
        const i=setInterval(()=>{
            //api polling
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(10),
            }))
        },2000);
        return ()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
        <div>
            {chatMessages.map((c,i)=>(
                <ChatMessage key={i} name={c.name} message={c.message}/>
            ))
            }
        </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black" onClick={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Manish",
            message:livemessage,
        }))
    }}>
        <input className="w-96" type="text" value={livemessage} onChange={(e)=>{
            setlivemessge(e.target.value)
        }}/>
        <button className="px-2 mx-2 bg-green-100"></button>
    </form>
    </>
  )
}

export default LiveChat