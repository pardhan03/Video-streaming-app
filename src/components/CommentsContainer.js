import React from 'react'
import usericon from './image/user-icon.webp'


const CommentData=[
    {
        name:"Manish kumar",
        text:"Great content",
        replies:[
            {
                name:"Manish kumar",
                text:"Great content",
                replies:[],
            },{
                name:"Manish kumar",
                text:"Great content",
                replies:[]
            }
        ]
    },
    {
        name:"Manish kumar",
        text:"Great content",
        replies:[],
    },
    {
        name:"Manish kumar",
        text:"Great content",
        replies:[],
    }
];

const Comment=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
            <img className="w-12 h-8" src={usericon} alt='user'/>
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentsContainer