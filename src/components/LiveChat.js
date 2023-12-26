import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName } from './utils/helper';
import { makeRandomMessage } from './utils/helper';
import { addMeassage } from './utils/Chatslice';

const LiveChat = () => {

    const dispatch=useDispatch();
    
    const chatMessages=useSelector(store=>store.chat.message);

    const[livemessage,setlivemessge]=useState("");

    useEffect(()=>{
        const i=setInterval(()=>{
            //api polling
            dispatch(addMeassage({
                name:generateRandomName(),
                message:makeRandomMessage(10),
            }))
        },2000);
        return ()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
            {chatMessages.map((c,i)=>(
                <ChatMessage key={i} name={c.name} message={c.message}/>
            ))
            }
        </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMeassage({
            name:"Manish",
            message:livemessage,
        })
        );
        setlivemessge("");
    }}>
        <input className="px-2 w-96" type="text" value={livemessage} onChange={(e)=>{
            setlivemessge(e.target.value)
        }}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  )
}

export default LiveChat