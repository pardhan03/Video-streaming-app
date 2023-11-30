import React from 'react'
import { useEffect,useState } from 'react'
import { YOUTUBE_API } from './utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const[videos,setvideos]=useState([]);

  useEffect(()=>{
    getVideos();    
  },[]);

  const getVideos= async ()=>{
    const data=await fetch(YOUTUBE_API);
    const json= await data.json();
    //console.log(json);
    setvideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
        {videos.map(video=>
          <Link key={video.id} to={"/watch?v="+video.id}>
            <VideoCard  info={video}/>
          </Link>
      )}
    </div>
  )
}

export default VideoContainer