import React from 'react'
import usericon from './image/user-icon.webp'


const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center p-2 shadow-sm">
        <div>
            <img src={usericon}/>
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage